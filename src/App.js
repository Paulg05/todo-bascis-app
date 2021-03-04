import "./App.css";
import TodoList from "./components/TodoList";
// import Todo from "./components/Todo";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
