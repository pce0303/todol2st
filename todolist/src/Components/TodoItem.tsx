interface TodoItemProps {
  id:number;
  text:string;
  completed:boolean;
  onClickDelete(id:number): void;
}

const TodoItem = ({id, text, completed, onClickDelete}:TodoItemProps) => {
  return (
    <li className="todo-container">
      {completed ? <button>완료됨</button> : <button>완료하기</button>}
      <p>{text}</p>
      <div className="button-container">
        <button type="button"><b>수정</b></button>
        <button type="button" onClick={() => onClickDelete(id)}><b>삭제</b></button>
      </div>
    </li>
  );
}

export default TodoItem;