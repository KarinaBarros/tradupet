import Link from "next/link"

export default function Nav() {
    return (
        <nav className="w-full h-16 flex items-center p-4">
            <img src="/logo.png" alt="Logo" className="h-10" />
            <div className="flex">
                <span className="ml-2 text-xl font-bold text-orange-500">Tradu</span>
                <span className="text-xl font-bold">Pet</span>
            </div>
            <Link href="/analise" className="ml-auto px-4 py-2 bg-orange-500 text-white rounded-2xl hover:bg-orange-600 transition">
                Traduz pra mim!
            </Link>
        </nav>
    )
}
