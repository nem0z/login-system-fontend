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
    ];

    return (
        <div>
            <Form submitAPI={'http://localhost:3000/login'} inputs={inputs}/>
        </div>
    ); 
        
}