import api from "./baseApi";

interface ICreateSession {
    email: string;
    password: string;
}

async function createSession({email, password}: ICreateSession) {
    await api.post("/session", {
        email,
        password
    } )
}


export {
    createSession
}