import { useState } from "react";
import TodoItem from './TodoItem';
import CreateTodo from './CreateTodo';

interface Task {
  id:number;
  text:string;
  completed:boolean;
}

export default function TodoList () {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState<Task[]>([
        {id:1, text:'첫 번째 할일', completed:true},
        {id:2, text:'두 번째 할일', completed:false}
  ]);

  const handleTextTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleTextInput= (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const newTodo: Task = { //새로운 할일 추가
      id: Date.now(),
      text: inputText,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    setInputText("");
  };

  const deleteTodo = (id:number) => { //삭제하기
    setTodoList(todoList.filter((todoItem) => todoItem.id !== id));
  }

  return (
    <div className="todoListContainer">
      {todoList.map((item) => (
        <TodoItem id={item.id} text={item.text} completed={item.completed} onClickDelete={deleteTodo}/>
      ))}
      <CreateTodo
        onChange={handleTextTyping}
        onSubmit={handleTextInput}
        inputText={inputText}
      />
    </div>
  );
}