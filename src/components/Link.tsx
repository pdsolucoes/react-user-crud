import * as React from "react"

interface ILink {
    url: string;
    url_message: string;
}

const Link: React.FC<ILink> =  ({url, url_message}: ILink) => {
    return (
        <>
            <a href={url}
            
                style={{
                    margin: "10px 0",
                    fontSize:  "14px",
                    fontWeight: "bold",
                    textDecoration: "none"
                }}
            >{url_message}</a>
        </>
    )
}


export default Link