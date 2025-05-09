import { useAuthContext } from '../assets/contex/AuthContext';
import { Counter } from './Counter';
import { RandomNumber } from './RandomNumber';
import { TaskList } from './TaskList';


export const LoginPage = () => {
  const { isChecking, loginWithEmailPassword, logout, user } = useAuthContext();

  if (isChecking) {
    return <h3 className="text-blue-200 text-lg">Verificando usuario</h3>;
  }

  if (user) {
    return (
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Bienvenido</h1>
        <p className="text-sm mb-1">authenticated</p>
        <p><span className="text-blue-400">Role</span><br />{user.role}</p>
        <p><span className="text-blue-400">Name</span><br />{user.name}</p>
        <p><span className="text-blue-400">Email</span><br />{user.email}</p>

        <div className="mt-6 space-y-4">
          <Counter />
          <RandomNumber />
          <TaskList />
        </div>

        <button
          className="bg-blue-400 p-2 mt-4 rounded-2xl"
          onClick={logout}
        >
          salir
        </button>
      </div>
    );
  }

  return (
    <div className="text-center text-white">
      <h3 className="text-blue-500 font-bold text-2xl">
        Ingresar a la aplicación
      </h3>

      <button
        className="bg-blue-400 p-2 rounded-2xl mt-1"
        onClick={() =>
          loginWithEmailPassword("erik@gmail.com", "12345678")
        }
      >
        Ingresar
      </button>
    </div>
  );
};
