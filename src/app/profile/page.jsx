import Image from "next/image"
import Menu from "../components/Menu"
// import pic from ''
export default function page() {
    return (
        <>
            <Menu />
            <div className="global-color">Profile</div>
            <img src="file.svg" alt="" width={100} />
            <Image
                className="dark:invert"
                src="/file.svg"
                alt="Next.js logo"
                width={100}
                height={20}
                priority
            />
        </>
        
    )
}
