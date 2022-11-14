import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "./Button";

export default function TaskDetails() {
  const params = useParams();

  const navigate = useNavigate();

  const handleBackTask = () => {
    navigate("/");
  };

  return (
    <>
      <div className="back_button_container">
        <Button onClick={handleBackTask}>Voltar</Button>
      </div>
      <div className="task_details_container">
        <h2> {params.taskTitle} </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta
          minima recusandae cum cupiditate hic?
        </p>
      </div>
    </>
  );
}
