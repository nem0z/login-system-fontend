import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

import LoginForm from './components/form/LoginForm';
import RegisterForm from './components/form/RegisterForm';

function App() {
  const [token, setToken] = useState(sessionStorage.getItem('token') ?? null);
  const [display, setDisplay] = useState(null);

  const login = token => {
	if(!token) return;
    setToken(token);
	sessionStorage.setItem('token', token);
  };

  const register = data => {

  };

  useEffect(() => {
    if(token) {
        const req = {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'token': token
			},
      };

-      fetch('http://localhost:3000/test', req)
        .then(res => res.json())
        .then(data => setDisplay(data))
        .catch(err => console.error(err));
    }
      
  }, [token]);
  
  
  return (
    <div className="App">
      <LoginForm onSubmit={login}/>
      <RegisterForm onSubmit={register}/>
      { display }
    </div>
  );
}

export default App;
