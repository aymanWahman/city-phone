'use client';
// import { ThemeProvider } from "../components/provider";

// import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from 'next-themes';
// const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en" >
      <body className="bg-white text-black  dark:bg-slate-800  dark:text-white hover:text-gray-600 transition duration-700">
      <ThemeProvider attribute='class'>
        <Header  />
        {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}