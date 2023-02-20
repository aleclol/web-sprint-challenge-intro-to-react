import React from 'react'
import Character from './Character'
import styled from 'styled-components'

const ContainerStyle = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
`

function Container (props){
console.log(props)
return (
    <ContainerStyle>
        {props.characters.map((value, i) => {
            //console.log(value);
            return <Character characters={value} key={i} />
        })}
    </ContainerStyle>
)

}

export default Container