"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { BsBellFill } from "react-icons/bs"
import { IoMdHome, IoMdPerson } from "react-icons/io"


export default function Header()
{
    const router = useRouter()

    return <header className="bg-header-gradient border-b py-[12px] px-[80px] text-defaultblue  ">
        <div className="desktop-header sm:flex hidden flex justify-between items-center">
            <div onClick={() => router.push("/")} className="logo sm:flex gap-2 hidden items-center cursor-pointer">
                <Image src="/logo-dc.png" alt="Logo do Departamento da Computação da Universidade Federal de São Carlos" width={100} height={80} ></Image>
                <h1 className="text-5xl font-logo font-semibold">RoboDc<span className="text-defaultblue">Ds</span></h1>
            </div>
            <ul className="text-lg flex gap-4">
                <li><a className="hover:text-bluehover" href="">Página Inicial</a></li>
                <li><a className="hover:text-bluehover" href="">Componentes</a></li>
                <li><a className="hover:text-bluehover" href="">Comportamentos</a></li>
            </ul>
        </div>

        <div className="mobile-header sm:hidden max-sm:sticky">
            <div className="flex gap-6 items-center justify-between">
                <IoMdHome className="cursor-pointer text-white hover:text-[#646570] active:bg-clickedbgcolor" size={36} />
                <BsBellFill className="cursor-pointer text-white hover:text-[#646570] active:bg-clickedbgcolor" size={28} />
                <IoMdPerson className="cursor-pointer text-white hover:text-[#646570] active:bg-clickedbgcolor" size={36}  />
            </div>
        </div>
    </header>
}
