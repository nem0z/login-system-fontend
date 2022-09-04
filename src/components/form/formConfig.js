const loginAPI = 'http://localhost:3000/login';
const registerAPI = 'http://localhost:3000/register';

const loginFields = [
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

const registerFields = [
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

export { loginAPI, registerAPI, loginFields, registerFields}
