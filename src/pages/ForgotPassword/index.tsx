import * as React from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Stack } from "@mui/material";

import {useState} from "react"

import {useNavigate} from "react-router-dom"
import { forgotPassword } from "../../services/Password";

interface IForgotPassword{
    imgUrl: string;
}

const ForgotPassword: React.FC<IForgotPassword> = ({imgUrl}) => {
    const [email, setEmail] =  useState("")
    const navigate = useNavigate()

    const navigateToLogin = () => {
        navigate("/login")
    }   


    const handleSubmit =async () => {
        try {
            await forgotPassword(email)
            navigate("/confirmation")
        }catch(err) {
            console.error(err)
        }

    }


    return (
        <Box
        sx={{
            width: "100vw",
            height: "100vh",
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: '#f9f9f9'
        }}
        >        
            <Box
            sx={{
                width: "70vw",
                height: "70vh",
                display:"flex",
                margin:"auto",
                flexDirection: "row",
                alignContent: "space-between",
                borderRadius: "10px",
                border: "1px solid #E5EDEC !important",
            }}> 
                    <Box sx={{
                        width: "50%",
                        height: "100%"
                    }}>
                        <img 
                        width="100%"
                        height="100%"
                        style={{
                            borderTopLeftRadius: "10px",
                            borderBottomLeftRadius: "10px"
                        }}
                        src={imgUrl}
                        alt="presetation"></img>
                    </Box>

                    <Box sx={{
                        width: "50%",
                        height: "100%",
                        display:"flex",
                        justifyContent: "center",
                        boxSizing: "border-box",
                        flexDirection: "column",
                        padding:10,
                        backgroundColor: "white",
                        borderTopRightRadius: "10px",
                        borderBottomRightRadius: "10px",
                        }}>
                        <h1 style= {{
                            color: "#06BEA7"
                        }}>Recuperar senha</h1>
                        <p
                            style={{
                                fontSize: "14px"
                            }}
                        >Digite seu e-mail para receber um c??digo de recupera????o.</p>
                        <TextField id="standard-basic"
                        variant="standard"
                        type={"email"} 
                        label={"E-mail"}
                        onChange={e => setEmail(e.target.value)}/>

                        <Stack 
                        sx={{
                            marginTop: "5vh"
                        }}
                        spacing={2} 
                        direction="row">
                            <Button variant="contained" style= {{
                                backgroundColor: "#06BEA7"
                            }} onClick={handleSubmit}>
                            <strong>Enviar c??digo</strong>
                            </Button>
                    
                            <Button variant="contained" style= {{
                                backgroundColor: "#FFF",
                                border: "1px solid #06BEA7",
                                color: "#06BEA7"
                            }} onClick={navigateToLogin}>
                            <strong>Cancelar</strong>
                            </Button>    
                        </Stack>
                    </Box> 


            </Box>
        </Box>
    )
}

export default ForgotPassword