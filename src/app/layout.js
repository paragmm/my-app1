'use client';
import "./globals.css";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <ProgressBar
          height="10px"
          color="#0000"
          options={{ showSpinner: true }}
        />
      </body>
    </html>
  );
}