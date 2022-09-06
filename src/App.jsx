// react
import React from "react";

// router
import {
	BrowserRouter,
	Routes,
	Route,
	Link,
} from "react-router-dom";

// hooks
import { useState } from 'react';

// components
import LoginForm from './components/form/LoginForm';
import RegisterForm from './components/form/RegisterForm';
import Home from './components/home/Home';

// css
import './App.css';
import './components/form/Form.css';


// app
function App() {
	const [token, setToken] = useState(sessionStorage.getItem('token') || null);

	const login = token => {
		if (!token) return;
		sessionStorage.setItem('token', token);
		return setToken(token);
	};

	const register = data => {
		console.log(data);
	};

	const logout = e => {
		e.preventDefault();
		sessionStorage.removeItem('token');
		return setToken(null);
	}
  
  // render
  return (
    <div className="App">
    	<BrowserRouter className="header">
			<header className="header">
				<h1>Login system app</h1>
				<ul className="nav">
					<li>
						<Link to="/" className="link">Home</Link>
					</li>
					{ !token &&
						<li>
							<Link to="/login" className="link">Login</Link>
						</li>
					}
					{ !token &&
						<li>
							<Link to="/register" className="link">Register</Link>
						</li>
					}
					<li>
						<span onClick={logout} className="link">Logout</span>
					</li>
				</ul>
			</header>
			
			<main className="main">
				<Routes>
					<Route 
						path="/"
						element={ <Home user={"Idz"} token={token} /> }
					/>
						
					{
						!token &&
						<Route 
							path="/login"
							element={ <LoginForm onSubmit={login} /> }
						/>
					}

					{
						!token && 
						<Route 
							path="/register"
							element={ <RegisterForm onSubmit={register} /> }
						/>
					}
				</Routes>
			</main>

    	</BrowserRouter>
    </div>
  );
}

//export
export default App;
