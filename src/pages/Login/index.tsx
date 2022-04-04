import * as React from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import {useState} from "react"
import { Divider } from "@mui/material";
import Link from "../../components/Link";

import { store } from '../../config/store';



interface Ilogin{
    logoUrl: string;
    imgUrl: string;
    projectDescription: string;
}

const Login: React.FC<Ilogin> = ({logoUrl, imgUrl, projectDescription}) => {
    const [email, setEmail] =  useState("")
    const [password, setPassword] = useState("")
    const {dispatch}  = store;

    const handleSubmit = async () => {
        await dispatch.Auth.loginAsync({email, password})
        console.log("Deu certo login")
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
                        <img
                         height="75px"
                         width="100%" 
                         src={logoUrl}
                         alt="logo"></img>
                        <p style={{
                            textAlign: "center",
                            fontSize: "14px"
                        }}>{projectDescription}</p>
                        <Divider></Divider>
                        <h1 style= {{
                            color: "#06BEA7"
                        }}>Login</h1>
                        <TextField id="standard-basic"
                        variant="standard"
                        type={"email"} 
                        label={"E-mail"}
                        onChange={e => setEmail(e.target.value)}/>
                        <TextField id="standard-basic"

                        variant="standard"
                        type={"password"}  
                        label={"Senha"}
                        onChange={e => setPassword(e.target.value)}/>

                        <Link url_message="Esqueci minha senha" url="/forgot"></Link>
                       

                        <Button variant="contained" style= {{
                            backgroundColor: "#06BEA7"
                        }} onClick={handleSubmit}>
                           <strong>ENTRAR</strong>
                        </Button>
                
                    </Box> 


            </Box>
        </Box>
    )
}

export default Login