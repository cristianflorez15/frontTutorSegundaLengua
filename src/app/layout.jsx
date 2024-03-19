'use client'
import "./globals.css";
import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Foooter";

export default function RootLayout({ children }) {
  return (
    
      <html lang="es">
          <body className="flex flex-col bg-white justify-between min-h-screen">
            <Header/>
            <main className="my-4 mb-auto h-full">{children}</main>
            {/* <Footer className="mt-4"/> */}
          </body>
      </html>
    
  );
}
