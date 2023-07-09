import TodoItem from "@components/TodoItem";
import { prisma } from "@db/db";
import Link from "next/link";

function getTodoItems() {
    return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
    "use server"

    await prisma.todo.update({
        where: {
            id
        }, 
        data: {
            complete
        }
    });
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
                    <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
                ))}
            </ul>
            
            <Link href='/new' className="btn">New</Link>
        </>
    );
}
