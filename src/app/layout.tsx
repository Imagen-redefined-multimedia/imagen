import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";


/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

export const metadata: Metadata = {
  title: "Imagen Wall Art",
  description: "Redefined Multimedia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        /*className={`${geistSans.variable} ${geistMono.variable} antialiased`}*/
      >
         <div>
           <Navbar/>
		<div className=" flex mx-20">
           		{children}
		</div>
           <Footer/>
         </div>
      </body>
    </html>
  );
}
