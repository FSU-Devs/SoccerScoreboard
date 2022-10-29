import React from 'react'
import styled from "styled-components"


function Section() {
  return (
    <Wrap>
        <ItemText>
            <h1>Soccer Scoreboard Generator</h1>
        </ItemText>
       
        <ButtonGroup>
            <CenterButton>Create a new scoreboard</CenterButton>
        </ButtonGroup>

    </Wrap>
  )
}

export default Section

const Wrap = styled.div` //wrap is the represents the whole front page basically
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100vw;
    height: 90vh;
    background-repeat: no-repeat; 
    background-position: center bottom;
    background-size: 725px;
    background-image: url('/Images/soccerField.png');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    border-radius: 100px;
    opacity : 0.85;
    text-transform: uppercase;
    font-size: 12px;
    color: white;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 60px;
`

const CenterButton = styled.div`
    background-color: red;
    height: 40px;
    width: 250px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity : 0.85;
    text-transform: uppercase;
    font-size: 14px;
    cursor: pointer;
`

/*const sBall = styled.img`
    margin-top: 20px;
    height: 40px;
    postion: 
`

const Buttons = styled.div`

`

*/