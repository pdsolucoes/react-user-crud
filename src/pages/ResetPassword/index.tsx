import * as React from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Stack } from "@mui/material";

import {useState} from "react"


const ResetPassword: React.FC = () => {
    const [newPassword, setNewPassword] =  useState("");
    const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("")

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
                        src="https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027-696x464.jpg"
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
                        }}>Redefinir senha</h1>
                        <p
                            style={{
                                fontSize: "14px"
                            }}
                        >Digite a sua nova senha</p>
 
                        <TextField id="standard-basic"

                        variant="standard"
                        type={"password"}  
                        label={"Senha"}
                        onChange={e => setNewPassword(e.target.value)}/>

                        <TextField id="standard-basic"

                        variant="standard"
                        type={"password"}  
                        label={"Confirmação da senha"}
                        onChange={e => setNewPasswordConfirmation(e.target.value)}/>

                        <Stack 
                        sx={{
                            marginTop: "5vh"
                        }}
                        spacing={2} 
                        direction="row">
                            <Button variant="contained" style= {{
                                backgroundColor: "#06BEA7"
                            }} onClick={() => console.log({newPassword, newPasswordConfirmation})}>
                            <strong>Redefinir senha</strong>
                            </Button>
                    
                            <Button variant="contained" style= {{
                                backgroundColor: "#FFF",
                                border: "1px solid #06BEA7",
                                color: "#06BEA7"
                            }} onClick={() => console.log("cancelou")}>
                            <strong>Cancelar</strong>
                            </Button>    
                        </Stack>
                    </Box> 


            </Box>
        </Box>
    )
}

export default ResetPassword