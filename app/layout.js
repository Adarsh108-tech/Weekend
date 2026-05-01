import { Inter, Orbitron, Michroma, Fira_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", weight: ["400", "700", "900"] });
const michroma = Michroma({ subsets: ["latin"], variable: "--font-michroma", weight: "400" });
const firaSans = Fira_Sans({ subsets: ["latin"], variable: "--font-fira-sans", weight: ["800", "900"], style: ["italic"] });

export const metadata = {
  title: "ACM Weekend | Avengers Doomsday",
  description: "ACM Weekend is a dynamic, multi-event experience including Deco Disaster, Commit Happens, and Model Wars.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${orbitron.variable} ${michroma.variable} ${firaSans.variable} font-body antialiased bg-doom-black min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
