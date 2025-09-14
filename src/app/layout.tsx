import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";



export const metadata: Metadata = {
  title: "Imagen Wall Art | Redefined Multimedia",
  description: "High quality printing and branding solutions to elevate your business. Custom designs, eco-friendly printing materials, and fast delivery",
  keywords: "printing, wall art, branding, custom design, eco-friendly printing, business branding, business cards, steel fabrication, flyers, posters.",
  authors: [{name: "Imagen | Redefined multimedia"}],
  viewport: "width=device-width, intitial-scale=1",
  robot:"index, follow",
  openGraph: {
   title: "Imagen Redefined Multimedia | Printing And Branding Services",
   description: "High quality quality printing and branding solutions to elevate your business.",
   url: "",
   siteName: "Imagen Redefined Multimedia",
   images: [
   {
	   url: "",
	   width: 1200,
	   height: 630,
	   alt: "Imagen Redefined Multimedia branding example",
     },
   ],
   locale: "en_US",
   type: "website",
  }
  
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
		<div >
		{children}
		</div>
           <Footer/>
         </div>
      </body>
    </html>
  );
}
