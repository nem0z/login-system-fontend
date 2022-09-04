import { useForm } from "react-hook-form";

export default function({inputs, onSubmit}) {

    const { register, handleSubmit, formState } = useForm();
    const { errors, isSubmitting } = formState;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            { inputs.map((input, k) => (
                <div key={k} className="required">
                    <label htmlFor={input.name}>{input.label}</label>
                    <input
                        name={input.name}
                        type={input.type}
                        {...register(input.name, {required: "This field must be filled"})}
                    />
                    { errors[input.name] && <span className="errorMessage">{errors[input.name].message}</span> }
                </div>
                )) 
            }

            <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>
    );
}