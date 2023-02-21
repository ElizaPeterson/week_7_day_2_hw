import React from "react";  
import Film from "./Film";

const FilmList = ({films}) => {

    const filmNodes = films.map((film) => {
        return <Film title={film.name} link={film.url} key={film.id}/>
    })

    return(
        <>
            <ul className="film-list">
                {filmNodes}
            </ul>
        </>
    )
}

export default FilmList;