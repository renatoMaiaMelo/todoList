import { useNavigate } from "react-router-dom";

import { CgClose, CgInfo } from "react-icons/cg";

export default function Task({ task, handleTaskClick, handleRemoveTask }) {
  const history = useNavigate();

  const handleTaskDetailsClick = () => {
    history(`/${task.title}`);
  };
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <h4 className="task_title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </h4>
      <div className="buttons_container">
        <button onClick={handleTaskDetailsClick} className="details_task">
          <CgInfo />
        </button>
        <button
          onClick={() => handleRemoveTask(task.id)}
          className="remove_task"
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
}
