import "global.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Ticket App",
  descriptrion: "Generated by Clarity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body classname={inter.classname}>{children}</body>{" "}
    </html>
  );
}
//1:13:23
