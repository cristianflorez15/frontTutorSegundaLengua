'use client'
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout({ children }) {
  return (
    
      <html lang="es">
          <body>
            <main>{children}</main>
          </body>
      </html>
    
  );
}
