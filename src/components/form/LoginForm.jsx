import Form from "./Form";
import { loginAPI, loginFields } from "./formConfig";

export default function LoginForm({onSubmit, logged}) {

    const handleSubmit = values => {
        const req = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        };

        return fetch(loginAPI, req)
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
            <Form inputs={loginFields} onSubmit={handleSubmit}/>
        </div>
    ); 
        
}