"use client"
import Menu from '../components/Menu';
import styles from './about.module.css';
import { useSearchParams } from 'next/navigation';

export default function page() {
  const searchParams = useSearchParams();
  return (
    <>
      <Menu />
      <div className={styles.aboutColor}>About</div>
      <p>Computer: {searchParams.get("computer")}</p>
      <p>Quantity: {searchParams.get("quantity")}</p>
    </>
    
  );
}