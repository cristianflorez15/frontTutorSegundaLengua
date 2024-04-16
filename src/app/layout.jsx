'use client'
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/partials/Header";

export default function RootLayout({ children }) {
  return (
    
      <html lang="es">
          <body className="bg-dark">
            <Header/>
            <main>{children}</main>
          </body>
      </html>
    
  );
}
