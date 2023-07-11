import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const submit = (e) => {
    e.preventDefault()
    if(inputValue.trim().length < 1) return
    onNewCategory(inputValue)
    setInputValue('')
  }
  
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="Send Gif"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
    </form>
  );
};
