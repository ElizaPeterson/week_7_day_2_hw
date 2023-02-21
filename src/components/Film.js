import React from "react";  

const Film = ({title, link}) => {
    return(
    <>
        <li className="films">
        <a className="link" target="_blank" href={link}>{title}</a>
        </li>
    </>
    )

}

export default Film;