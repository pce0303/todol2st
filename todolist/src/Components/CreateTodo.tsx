interface InputTextProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmit(event: React.FormEvent<HTMLFormElement>): void;
  inputText: string;
}

export default function CreateTodo ({onChange, onSubmit, inputText}: InputTextProps) {
  return (
    <div className="createTodo">
      <form onSubmit={(event) => onSubmit(event)}>
        <input type="text" placeholder="할일을 입력하세요!" value={inputText} onChange={(e)=>onChange(e)}/>
        <button type="submit"><b>등록</b></button>
      </form>
    </div>
  );
}
