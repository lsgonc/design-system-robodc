"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Sidebar() {
    const router = useRouter()
    const [activeComponent, setActiveComponent] = useState("botao") // Estado para controlar o componente ativo

    // Lista de componentes disponíveis
    const componentes = [
        { id: "botao", name: "Botão", url: "/componentes/botao" },
        { id: "input", name: "Input", url: "/componentes/input" },
        { id: "card", name: "Card", url: "/componentes/card" },
        { id: "modal", name: "Modal", url: "/componentes/modal" },
        { id: "navbar", name: "Navbar", url: "/componentes/navbar" },
    ]

    // Função para navegar para o componente selecionado
    const handleComponentClick = (url: string, id: string) => {
        setActiveComponent(id) // Atualiza o componente ativo
        router.push(url) // Navega para a URL do componente
    }

    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <aside className="w-64 bg-lightblue-50 text-defaultblue p-6">
                <h2 className="text-2xl font-bold mb-6">Componentes</h2>
                <ul>
                    {componentes.map((component) => (
                        <li
                            key={component.id}
                            onClick={() => handleComponentClick(component.url, component.id)}
                            className={`cursor-pointer p-2 rounded-lg transition-colors ${
                                activeComponent === component.id
                                    ? "bg-lightblue-100 text-black"
                                    : "hover:bg-lightblue-100 hover:text-black"
                            }`}
                        >
                            {component.name}
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    )
}