import Task from "./Task";

export default function Title({ tasks, handleTaskClick, handleRemoveTask }) {
  return (
    <>
      {tasks.map((tasks) => (
        <Task
          key={tasks.id}
          task={tasks}
          handleTaskClick={handleTaskClick}
          handleRemoveTask={handleRemoveTask}
        />
      ))}
    </>
  );
}
