"use client"

type TodoItemProps = {
  id: string
  title: string
  complete: boolean
  toggleTodo: (id: string, complete: boolean) => void
};

export default function TodoItem({ id, title, complete, toggleTodo } : TodoItemProps) {
  return (
    <li className="flex gap-2 items-center">
        <input 
          type="checkbox" 
          id={id} 
          className="cursor-pointer peer" 
          defaultChecked={complete}  
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
            {title}
        </label>
    </li>
  );
}
