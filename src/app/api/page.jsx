"use client";
import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';

const Page = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const rsp = await fetch(process.env.API_BASE_URL);
            const json = await rsp.json();
            setData(json.products);
        };
        fetchData();
    }, []); 
    console.log(data);
    return (
        <div>
            <h1>API Key: {process.env.API_KEY}</h1>
            <Menu />
            <h1>Call API</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title} - {item.category}</li>
                ))}
            </ul>
        </div>
    );
};
export default Page;
