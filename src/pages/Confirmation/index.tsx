import * as React from "react"
import Box from '@mui/material/Box';

interface IConfirmation{
    imgUrl: string;
}

const Confirmation: React.FC<IConfirmation> = ({imgUrl}) => {



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
                        }}>Enviamos um e-mail</h1>
                        <p
                            style={{
                                fontSize: "14px"
                            }}
                        >Enviamos um link de recuperação para o seu email. Confira também sua caixa de spam.</p>

                    
                    </Box> 


            </Box>
        </Box>
    )
}

export default Confirmation