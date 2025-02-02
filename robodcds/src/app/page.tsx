"use client"

import Image from "next/image"
import { BsBellFill } from "react-icons/bs"
import { IoMdHome, IoMdPerson } from "react-icons/io"

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="flex-grow bg-gradient-to-b from-lightblue-50 to-lightblue-100 flex items-center justify-center text-white py-20 px-4 sm:px-8">
                <div className="text-center text-black">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">Bem-vindo ao RoboDcDs</h2>
                    <p className="text-lg sm:text-xl mb-8">Design system desenvolvido para o robô do Departamento de Computação da Universidade Federal de São Carlos (UFSCAR).</p>
                    <button className="bg-defaultblue hover:bg-bluehover text-white font-semibold py-2 px-6 rounded-lg">
                        Primeiros passos
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-white py-16 px-4 sm:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-defaultblue text-center mb-12">Recursos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="text-center border border-black rounded-md p-14 ">
                            <h3 className="text-xl font-semibold mb-2">Biblioteca de Componentes</h3>
                            <p className="text-gray-600">Explore os diversos componentes e ferramentas do robo.</p>
                        </div>
                        <div className="text-center border border-black rounded-md p-14">
                            <h3 className="text-xl font-semibold mb-2">Comportamentos</h3>
                            <p className="text-gray-600">Veja as principais ações e comportamentos modelados para as interações com os usuários.</p>
                        </div>
                        <div className="text-center border border-black rounded-md p-14">
                            <h3 className="text-xl font-semibold mb-2">Suporte da comunidade</h3>
                            <p className="text-gray-600">Ajude a contribuir e melhorar o design system do robo do DC.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-defaultblue text-white py-8 px-4 sm:px-8">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
                    <div className="text-center sm:text-left mb-4 sm:mb-0">
                        <p>&copy; 2023 RoboDcDs. All rights reserved.</p>
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-bluehover">Privacy Policy</a>
                        <a href="#" className="hover:text-bluehover">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}