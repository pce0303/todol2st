import { useState } from "react";
import { Task } from "./TodoList";

interface TodoItemProps {
  id:number;
  text:string;
  completed:boolean;
  onClickDelete(id:number): void;
  onClickUpdate(updated: Task): void;
}

export default function TodoItem ({id, text, completed, onClickDelete, onClickUpdate}:TodoItemProps) {

  const [isUpdated, setIsUpdated] = useState<boolean>(false);
  const [updatedText, setUpdatedText] = useState<string>(text);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedText(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedTodoItem = {
      id: id,
      text: updatedText,
      completed: completed,
    };
    onClickUpdate(updatedTodoItem);
    setIsUpdated(false); 
  }

  const handleComplete = () => {
    const updateTodoItem = {
      id: id, 
      text: text, 
      completed: !completed,
    };
    onClickUpdate(updateTodoItem);
  }

  return (
    <div>
      {!isUpdated ? (
        <li className="todo-container">
          {completed ? <button onClick={handleComplete}>완료취소</button> : <button onClick={handleComplete}>완료하기</button>}
          <p style={completed ? {textDecoration: "line-through"} : undefined}>{text}</p>
          <div className="button-container">
            <button type="button" onClick={() => setIsUpdated(true)}><b>수정</b></button>
            <button type="button" onClick={() => onClickDelete(id)}><b>삭제</b></button>
          </div>
        </li>
      ) : ( 
        <li className="todo-container">
          <form onSubmit={handleSubmit}>
            <input type="text" value={updatedText} onChange={handleInputChange} id="updateTodo"/>
            <div className="button-container">
              <button type="submit" id="save"><b>확인</b></button>
              <button type="button" onClick={() => setIsUpdated(false)} id="cancel"><b>취소</b></button>
            </div>
          </form>
        </li>
      )}
    </div>
  );
}
