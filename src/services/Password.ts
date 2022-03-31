import api from "./baseApi";

interface IResetPassword {
    token: string,
    new_password: string;
    new_password_confirmation: string;
}

async function forgotPassword(email: string)  {
    await api.post("/password/forgot", {
        email
    })
}


async function resetPassword(data:IResetPassword) {
    await api.post("/password/reset", data)
}


export {
    forgotPassword,
    resetPassword
}