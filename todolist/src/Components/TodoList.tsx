import { useState } from "react";
import TodoItem from './TodoItem';
import CreateTodo from './CreateTodo';

<<<<<<< HEAD
export interface Task {
=======
interface Task {
>>>>>>> 4b11b296369766ea4bc7bba87f5cc588fcb4b6cb
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

<<<<<<< HEAD
  const updateTodo = (newTodo: Task): void => { //수정하기
    const newTodoList = todoList.map((item) => {
      if(item.id === newTodo.id) return newTodo;
      else return item;
    });
    setTodoList(newTodoList);
  }

  return (
    <div className="todoListContainer">
      <h1>Todo List</h1>
      {todoList.map((item) => (
        <TodoItem 
        id={item.id} 
        text={item.text} 
        completed={item.completed} 
        onClickDelete={deleteTodo}
        onClickUpdate={updateTodo}
        />
=======
  return (
    <div className="todoListContainer">
      {todoList.map((item) => (
        <TodoItem id={item.id} text={item.text} completed={item.completed} onClickDelete={deleteTodo}/>
>>>>>>> 4b11b296369766ea4bc7bba87f5cc588fcb4b6cb
      ))}
      <CreateTodo
        onChange={handleTextTyping}
        onSubmit={handleTextInput}
        inputText={inputText}
      />
    </div>
  );
}