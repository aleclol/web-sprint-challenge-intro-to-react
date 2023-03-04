import React from 'react'
import Character from './Character'
import styled from 'styled-components'

const ContainerStyle = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
`

function Container (props){

return (
    <ContainerStyle>
        {props.characters.length > 0 && props.characters.map((value, i) => {
            return <Character characters={value} key={i} />
        })}
    </ContainerStyle>
)

}

export default Container