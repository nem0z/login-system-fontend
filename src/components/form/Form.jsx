import { useState } from "react";

export default function({inputs, onSubmit}) {

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
        onSubmit(values);
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