import * as React from "react"
import {Link as RouterLink} from "react-router-dom";

interface ILink {
    url: string;
    url_message: string;
}

const Link: React.FC<ILink> =  ({url, url_message}: ILink) => {
    return (
        <>
            <RouterLink to={url}
            
                style={{
                    margin: "10px 0",
                    fontSize:  "14px",
                    fontWeight: "bold",
                    textDecoration: "none"
                }}
            >{url_message}</RouterLink>
        </>
    )
}


export default Link