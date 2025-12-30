"use client";
import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';

const Page = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const rsp = await fetch('https://dummyjson.com/products');
            const json = await rsp.json();
            setData(json.products);
        };
        fetchData();
    }, []); 
    console.log(data);
    return (
        <div>
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
