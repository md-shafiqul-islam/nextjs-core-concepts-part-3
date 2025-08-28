import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Core Concepts NextJS",
    template: "%s | Core Concepts NextJS",
  },
  keywords: ["Next.js", "React", "JavaScript", "Learning"],
  description: "Exploring Basic NextJS Concepts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <header>
            <Navbar />
          </header>

          <main className="flex-1">{children}</main>

          <footer className="bg-teal-500 text-center">
            <h1>NextJS Awesome Footer</h1>
          </footer>
        </div>
      </body>
    </html>
  );
}
