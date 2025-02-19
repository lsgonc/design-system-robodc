import Sidebar from "@/components/Sidebar";

export default function Layout({children}) {
    return (
        <>
        <div className="flex">
            <Sidebar></Sidebar>
            <main className="p-6">{children}</main>
        </div>
        </>
    )
}