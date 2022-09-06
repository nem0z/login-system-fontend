import { Navigate } from 'react-router-dom';

export default function Home({user, token}) {

    return (
        <div className="home">
            { /* prevent user to access Home before login */ }
            { !token && <Navigate to="/login" /> }
            <h1>Welcome home {user}</h1>
        </div>
    )
}