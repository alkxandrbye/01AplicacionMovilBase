import './App.css'
import { Counter } from './components/Counter'
import { RandomNumber } from './components/RandomNumber';
import { TaskList } from './components/TaskList';

function App() {

  return (<>
    <div className="flex flex-col justify-center items-center h-svh w-svw">
      <h1 className="text-4xl mb-5">
        React Counter
      </h1>
      <Counter/>
      <RandomNumber/>
      <TaskList />
    </div>
  </>
  );

}

export default App
