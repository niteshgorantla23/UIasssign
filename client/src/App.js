
import './App.css';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';


function App() {
  return (
    <div className="App">
      <Navbar />
      <LoginForm />
      <RegisterForm />
    </div>
  );
}

export default App;
