import Form from "./Form";

export default function({onSubmit}) {
    const inputs = [
        {
            "name": "username",
            "label": "Username",
            "type": "text",
        },
        {
            "name": "password",
            "label": "Password",
            "type": "password",
        },
        {
            "name": "email",
            "label": "Email",
            "type": "email",
        },
    ];

    const api = 'http://localhost:3000/register';

    const handleSubmit = values => {
        const req = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        };

        return fetch(api, req)
            .then(res => res.json())
            .then(data => onSubmit(data))
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Form inputs={inputs} onSubmit={handleSubmit}/>
        </div>
    ); 
        
}