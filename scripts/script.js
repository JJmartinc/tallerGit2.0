function validation(users, email, pass) {
    for (user of users) {
        if (user.email === email && user.pass === pass) {
            return true;
        }
    }
    return false;
}

const users = [
    {
        email: "ruben@gmail.com",
        pass: "1234"
    },
    {
        email: "cesar@gmail.com",
        pass: "5678"
    },
    {
        email: "ana@gmail.com",
        pass: "9012"
    },
    {
        email: "jorge@gmail.com",
        pass: "3456"
    }
]

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validation(users, event.target.email.value, event.target.password.value)) {
        alert("ÉXITO - Formulario correcto y enviado")
        event.target.submit();
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
)