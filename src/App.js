import './App.css';
import Todo from './components/todo'

function App() {
  const todos = [
    { id:1, title: 'Take out the trash', completed: false },
    { id:2, title: 'Grocery shopping', completed: true },
  ]
  return (
    <div className="App">
      { todos.map((todo) => {
        return (<Todo key={todo.id} todo={todo} />)
      })
      }
    </div>
  );
}

export default App;
