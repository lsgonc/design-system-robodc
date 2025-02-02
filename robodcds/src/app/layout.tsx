import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  weight: ['100','200','300','400','500','600','700','800','900']
})

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ['100','300','400','500','700','900']
}) 

export const metadata: Metadata = {
  title: "RoboDc | Design System",
  description: "Site oficial do design system do robo do Departamento da Computação da Universidade Federal de São Carlos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${roboto.variable} font-default antialiased`}
      >
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
