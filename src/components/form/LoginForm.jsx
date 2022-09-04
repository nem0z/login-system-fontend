import Form from "./Form";
import { loginAPI, loginFields } from "./formConfig";

export default function({onSubmit}) {

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
            .then(res => res.json())
            .then(data => onSubmit(data))
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Form inputs={loginFields} onSubmit={handleSubmit}/>
        </div>
    ); 
        
}