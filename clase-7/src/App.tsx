import './App.css'
import { AuthProvider } from './assets/contex/AuthContext';
import { LoginPage } from './components/LoginPage';
// import { Counter } from './components/Counter';
// import { RandomNumber } from './components/RandomNumber';
// import { TaskList } from './components/TaskList';

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-svh w-svw bg-gray-900 text-white">
        <AuthProvider>
          <LoginPage />
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
