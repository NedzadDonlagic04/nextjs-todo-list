type TodoItemProps = {
    id: string
    title: string
    complete: Boolean
}

export default function TodoItem({ id, title, complete } : TodoItemProps) {
  return (
    <li className="flex gap-2 items-center">
        <input type="checkbox" id={id} className="cursor-pointer peer" />
        <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
            {title}
        </label>
    </li>
  );
}
