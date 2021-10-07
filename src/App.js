
function App() {
  return (
    <main>
      <form>
        <input type="text" placeholder="Task name"></input>
        <button>Create task</button>
        <ul>
          <li>
            <input checked="true" type="checkbox" />
            <span>Learn React</span>
          </li>
          <li>
            <input type="checkbox" />
            <span>Learn Hocks</span>
          </li>
          <li>
            <input type="checkbox" />
            <span>Keep on Keeping on</span>
          </li>
        </ul>
      </form>
    </main>
  );
}

export default App;
