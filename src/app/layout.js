import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-red-400 flex items-center justify-center">
          <h1>Global Header</h1>
        </div>
        {children}
        <div className="bg-red-400 flex justify-center items-center">
          <h1>Global Footer</h1>
        </div>
      </body>
    </html>
  );
}
