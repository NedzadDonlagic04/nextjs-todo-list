import Link from "next/link";

export default function Home() {
    return (
        <>
            <header>
                <h1 className="text-4xl font-bold">Todo List</h1>
            </header>

            <Link href='/new' className="mt-5 border-2 border-black rounded-lg px-4 py-2 float-right transition-all duration-300 ease-in-out hover:bg-sky-200 hover:translate-y-[-8px]">New</Link>
        </>
    );
}
