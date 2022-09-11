import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';

export default function Home({user}) {

	const createSignature = (...args) => Base64.stringify(sha256(args.join('')));

    useEffect(() => {
		const timestamp = Math.floor(Date.now() / 1000);
		const signature = {
			signature: createSignature(user.credential?.token, timestamp),
			timestamp: timestamp,
			userId: user.id,
		};

		const req = {
			method: 'GET',
			headers: {
				'signature': JSON.stringify(signature),
				'Accept': 'application/json',
			}
		};

        fetch('http://localhost:3000/test', req)
			.then(res => res.json())
			.then(console.log)
			.catch(console.error);
    
    }, []);
    

    return (
        <div className="home">
            { /* prevent user to access Home before login */ }
            { !user.credential?.token && <Navigate to="/login" /> }
            <h1>Welcome home {user.username}</h1>
        </div>
    )
}