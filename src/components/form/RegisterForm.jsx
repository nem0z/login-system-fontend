import Form from "./Form";

export default function() {
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

    return (
        <div>
            <Form submitAPI={'http://localhost:3000/register'} inputs={inputs}/>
        </div>
    ); 
        
}