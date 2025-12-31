"use client"
import Menu from '../components/Menu';
import styles from './about.module.css';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ComputerInfo() {
  const searchParams = useSearchParams();
  return (
    <>
      <p>Computer: {searchParams.get("computer")}</p>
      <p>Quantity: {searchParams.get("quantity")}</p>
    </>
  );
}

export default function Page() {
  return (
    <>
      <Menu />
      <div className={styles.aboutColor}>About</div>
      <Suspense fallback={<div>Loading...</div>}>
        <ComputerInfo />
      </Suspense>
    </>
    
  );
}