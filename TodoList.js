import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Shopping", completed: false },
    { id: 2, text: "Coding", completed: false },
    { id: 3, text: "Playing", completed: false },
  ]);

  const addTask = () => {
    setTodos([...todos, { id: Date.now(), text: todo, completed: false }]);
    setTodo("");
  };

  const handleDone = (doneId) => {
    setTodos(
      todos.map((todo) =>
        todo.id == doneId ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <h2>Your Tasks</h2>
      {todos.map(
        (todo) =>
          !todo.completed && (
            <div>
              <p style={{ display: "inline" }}>{todo.text}</p>
              <button onClick={() => handleDone(todo.id)}>Done</button>
            </div>
          )
      )}
    </div>
  );
};

export default TodoList;
