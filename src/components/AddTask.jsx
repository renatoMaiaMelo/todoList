import { useState } from "react";
import Button from "./Button";

export default function AddTask({ handleTaskAddition }) {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  };

  return (
    <div className="add_task_container">
      <input
        autoFocus
        onChange={handleInputChange}
        value={inputData}
        type="text"
        className="add_task_input"
      />
      <div className="add_task_button_container">
        <Button onClick={handleAddTaskClick}>Adiconar</Button>
      </div>
    </div>
  );
}
