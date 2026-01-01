import Menu from "../components/Menu";

async function getData() {
    const rsp = await fetch(process.env.API_BASE_URL, {
        cache: 'no-store',
    });
    const json = await rsp.json();
    return json.products;
}

export default async function Page() {
    const data = await getData();

    return (
        <div>
            <Menu />
            <h1>Call API (Server Render)</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title} - {item.category}</li>
                ))}
            </ul>
        </div>
    );
}
