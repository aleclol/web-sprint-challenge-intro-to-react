import React from 'react'
import styled from 'styled-components'
import CharacterDetail from './CharacterDetail'

const CharacterStyle = styled.div`
    background-color: rgba(76, 75, 80, .8);
    color: #fff;
    width: 500px;
    padding: 5px;
    border-radius: 3px;
    margin: 1% 0%;
h2{
    font-family: 'Georgia';
    color: gold;
}

`

function Character (props){
//console.log(props.characters)
return (
    <CharacterStyle>
        <h2>{props.characters.name}</h2>
        <CharacterDetail characters={props.characters} />
    </CharacterStyle>
)

}

export default Character