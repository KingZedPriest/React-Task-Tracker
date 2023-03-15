const Tasks = ({tasks}) => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={tasks.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
