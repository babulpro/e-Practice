import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PlainNavbar from "@/lib/component/PlainNavbar";
import MainNavbar from "@/lib/component/MainNavbar";
import { cookies } from "next/headers";

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

export default async function RootLayout({ children }) {

   const cookieStore = await cookies()
    const token = cookieStore.get('token')
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="mb-20">
          {token ? <PlainNavbar /> : <MainNavbar />}{
                      token ? <PlainNavbar/> : <MainNavbar/>
                    }
          
        </div>
        {children}
      </body>
    </html>
  );
}
