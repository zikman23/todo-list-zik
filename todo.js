function Todo({ todo, index, mark, remove }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>{todo.text}</span>
      <div>
        <button onClick={() => mark(index)}>✓</button> <button onClick={() => remove(index)}>✕</button>
      </div>
    </div>
  );
}
