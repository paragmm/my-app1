"use client";
import Menu from "./components/Menu";
import {useRouter} from 'next/navigation';

export default function Home() {
  const router=useRouter();
  const Goto =()=>{
    router.push('/about');
  }

  return (
    <div>
      <Menu />
      <p>Home</p>
      <button onClick={Goto}>Go to About</button>
      <button onClick={()=>router.push('/api')}>Go to API e</button>
    </div>
  );
}

