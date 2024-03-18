'use client'
import "./globals.css";
import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Foooter";

export const metadata = {
  title: "Tutor"
};

export default function RootLayout({ children }) {
  return (
    
      <html lang="es">
          <body className="flex flex-col bg-gray-300 justify-between min-h-screen">
            <Header/>
            <main className="my-4 h-full">{children}</main>
            <Footer className="mt-4"/>
          </body>
      </html>
    
  );
}
