import { prisma } from "@db/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data: FormData) {
  "use server"

  const title = data.get("todo-title")?.valueOf();

  if(typeof(title) !== "string") throw new Error("Title not type string");

  if(title.trim().length === 0) throw new Error("Title has to be a string longer than 0");

  await prisma.todo.create({ data: { title: title.trim(), complete: false }});

  redirect("/");
}

export default function AddNewTodo() {
  return (
    <>
      <header>
          <h1 className="text-4xl font-bold">Add New Todo</h1>
      </header>
      <form className="mt-5 flex flex-col gap-3" action={createTodo}>
        <input type="text" name="todo-title" className="bg-sky-50 outline outline-2 outline-black rounded py-2 px-4 transition-all ease-in-out duration-200 focus:outline-2 focus:outline-offset-4" required />
        <div className="flex flex-row justify-end gap-4">
            <Link href='/' className="btn">Cancel</Link>
            <button type="submit" className="btn">Create</button>
        </div>
      </form>
    </>
  );
}