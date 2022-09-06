import Form from "./Form";
import { registerAPI, registerFields } from "./formConfig";


export default function RegisterForm({onSubmit, logged}) {

    const handleSubmit = values => {
        const req = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        };

        return fetch(registerAPI, req)
            .then(res => {
                if(res.status === 200) return res.json();
                res.json().then(err => {
                    throw(err);
                });
            })
            .then(data => onSubmit(data))
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Form inputs={registerFields} onSubmit={handleSubmit}/>
        </div>
    ); 
        
}