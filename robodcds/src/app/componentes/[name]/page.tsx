import { redirect } from "next/navigation"

export default async function Componentes({
    params
}: { params: Promise<{name: string}> }){
    const name = (await params).name

    return <div>Componente: {name}</div>
}