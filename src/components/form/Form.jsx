import { useState } from "react";
import { useRef } from "react";

export default function({inputs, submitAPI}) {

    const [values, setValues] = useState(
        Object.fromEntries(inputs.map(input => [input.name, '']))
    );

    const updateValues = (inputName, value) => {
        let newValues = values;
        newValues[inputName] = value;
        setValues(newValues);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const req = {
            method: "POST",
            mode: "no-cors",
            headers: {
                "accept": "application/json"
            },
            body: JSON.stringify(values)
        };

        return fetch(submitAPI, req)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
    }

    return (
        <form onSubmit={handleSubmit}>
            { inputs.map((input, k) => (
                <div key={k}>
                    <label htmlFor={input.name}>{input.label}</label>
                    <input
                        name={input.name}
                        type={input.type}
                        onChange={e => updateValues(input.name, e.target.value)}
                    />
                </div>
                )) 
            }

            <button type="submit">Submit</button>
      </form>
    );
}