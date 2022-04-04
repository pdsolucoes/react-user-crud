import api from "./baseApi";

interface ICreateSession {
    email: string;
    password: string;
}

async function createSession({email, password}: ICreateSession) {
    const {data} = await api.post("/session", {
        email,
        password
    } )


    return {
        ...data.user,
        token: data.token
    }
}


export {
    createSession
}