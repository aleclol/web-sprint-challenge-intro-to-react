import React from 'react'
import styled from 'styled-components'

const CharacterStyle = styled.div`
    background-color: gray;
    width: 500px;
    padding: 5px;
    border-radius: 3px;
    margin: 1% 0%;


`

function Character (props){
//console.log(props.characters)
return (
    <CharacterStyle>
        <h2>{props.characters.name}</h2>
    </CharacterStyle>
)

}

export default Character