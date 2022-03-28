import * as React from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import {useState} from "react"
import { Divider } from "@mui/material";
import Link from "../../components/Link";


const Login: React.FC = () => {
    const [email, setEmail] =  useState("")
    const [password, setPassword] = useState("")


    return (
        <Box
        sx={{
            width: "100vw",
            height: "100vh",
            display:"flex",
            justifyContent: "center",
            alignItems: "center",
        }}
        >        
            <Box
            sx={{
                width: "80vw",
                height: "70vh",
                display:"flex",
                margin:"auto",
                flexDirection: "row",
                alignContent: "space-between",
                borderRadius: "10px",
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
                        rowGap: "10px",
                        paddingLeft: 10,
                        paddingRight: 10,
                    }}>
                        <img
                         height="100px"
                         width="100%" 
                         src="https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027-696x464.jpg"
                         alt="logo"></img>
                        <p style={{
                            textAlign: "center",
                            fontSize: "18px"
                        }}>Teste testeto muito grander par não caber na telas, ksdfghsgvdhunc,edf,g,sdt,h,vggfh.</p>
                        <Divider></Divider>
                        <h1>Login</h1>
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

                        <Link url_message="Esqueci minha senha" url="https://www.google.com.br"></Link>
                       

                        <Button variant="contained" style= {{
                            backgroundColor: "#06BEA7"
                        }} onClick={() => console.log({email, password})}>
                           <strong>ENTRAR</strong>
                        </Button>
                
                    </Box> 


            </Box>
        </Box>
    )
}

export default Login