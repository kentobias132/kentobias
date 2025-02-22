import type { Metadata } from "next";
import "./globals.css";
import Dock from "../components/dock";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tobi Kehinde🚀",
  description: "Fullstack Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css"
        />
      </head>
      <body>
        <div className="fixed inset-0 h-screen w-screen -z-10 gradient-bg" />
        {children}
        <Dock />
        <AnimatedGridPattern
          numSquares={60}
          maxOpacity={0.5}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 -z-10 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </body>
    </html>
  );
}
