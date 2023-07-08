import TodoItem from "@components/TodoItem";
import { prisma } from "@db/db";
import Link from "next/link";

function getTodoItems() {
    return prisma.todo.findMany();
}

export default async function Home() {
    const todos = await getTodoItems();

    return (
        <>
            <header>
                <h1 className="text-4xl font-bold">Todo List</h1>
            </header>

            <ul className="mt-5">
                {todos.map(todo => (
                    <TodoItem key={todo.id} {...todo} />
                ))}
            </ul>
            
            <Link href='/new' className="mt-5 border-2 border-black rounded-lg px-4 py-2 float-right transition-all duration-300 ease-in-out hover:bg-sky-200 hover:translate-y-[-8px] focus:bg-sky-200 focus:translate-y-[-8px]">New</Link>
        </>
    );
}
