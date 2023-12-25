'use client';
// import { ThemeProvider } from "../components/provider";

import { Sevillana, Cairo } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from 'next-themes';
const sevillana = Sevillana({ subsets: ['latin'], weight:['400'] });
const cairo = Cairo({
  subsets: ['arabic']
});

// export const metadata = {
//   title: 'City Phone',
//   description: 'Mobile services',
// };

export default function RootLayout({
  children
} : {
  children: React.ReactNode;
}) {


  return (
    <html lang="en" className={cairo.className}>
      <body className="bg-white text-black  dark:bg-slate-800  dark:text-white hover:text-gray-600 transition duration-700">
      <ThemeProvider attribute='class' >
        <Header  />
        {children}
        <div className={sevillana.className}>
        <Footer />
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}