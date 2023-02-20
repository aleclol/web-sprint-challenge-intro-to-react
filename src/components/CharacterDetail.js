import React from "react";

function CharacterDetail(props){

const heightIn = Math.round(props.characters.height * .39) % 12
const heightFt = Math.floor(props.characters.height * .39/12)
const BMI = Math.round(props.characters.mass/(props.characters.height/100 * props.characters.height/100))

    return(
        <div>
            <p>Height: {heightFt} ft {heightIn} in</p>
            <p>Weight: {Math.round(props.characters.mass*2.2)} lbs</p>
            <p>BMI: {BMI}</p>
            <p>First Appears in: {props.characters.films[0]}</p>
        </div>
    )

}

export default CharacterDetail