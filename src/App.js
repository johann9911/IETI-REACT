import {TaskItem} from "./TaskItem";

function App() {
  return (
    <main>
      <form>
        <input type="text" placeholder="Task name"></input>
        <button>Create task</button>
        <ul>
          <TaskItem isChecked={true} taskName="Learn React" />
          <TaskItem isChecked={false} taskName="Learn Hocks" />
          <TaskItem isChecked={false} taskName="Keep on Keeping on" />
  
        </ul>
      </form>
    </main>
  );
}

export default App;
