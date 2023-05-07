import React, { useState } from "react";
import styled from "styled-components";
import {RiArrowDropDownLine, RiArrowDropUpLine} from 'react-icons/ri'

import {TbRun, TbSwimming, TbBike} from 'react-icons/tb'
export const LandingPage = () => {
    
    const [dateCount, newDate] = useState<number>(1);
    const [initState, newState] = useState<number>(0)
    const [initMonth, newMonth] = useState<string>("January")

    console.log(dateCount)
    function increase(){
        newDate(dateCount + 1)
       
        newState((el: number)=>{
            return (el+1)%30
        })
        changeDate();
        
        
    }
    function remove(){
        newDate(dateCount - 1)
        console.log(dateCount)
        newState((el: number)=>{
            if(el < 1){
                return 29
            }else{
                return (el - 1)
            }
        })
        changeDate();
        
    }

    function changeDate(){
        newMonth((el: string)=>{
            if(dateCount <= 29 ){
                return el = 'January'
            }else if(dateCount >= 29 && dateCount <= 61){
                return el = 'February'
            }
            else if(dateCount >= 60 && dateCount <= 89){
                return el = 'March'
            }
            else if(dateCount >= 90 && dateCount <= 119){
                return el = 'April'
            }
            else if(dateCount >= 120 && dateCount <= 149){
                return el = 'May'
            }
            else if(dateCount >= 150 && dateCount <= 179){
                return el = 'June'
            }
            else if(dateCount >= 180 && dateCount <= 209){
                return el = 'July'
            }
            else if(dateCount >= 210 && dateCount <= 239){
                return el = 'August'
            }
            else if(dateCount >= 240 && dateCount <= 269){
                return el = 'September'
            }
            else if(dateCount >= 270 && dateCount <= 299){
                return el = 'October'
            }
            else if(dateCount >= 300 && dateCount <= 329){
                return el = 'November'
            }
            else if(dateCount >= 330 && dateCount <= 359){
                return el = 'December'
            }
            else{
                return el
            }
        })
    }
    
   
    


  return (
    <Container>
      <Main>
        <MainBG>
          <Card>
            <Div bg="">
              <Icon1 onClick={()=>{increase()}}></Icon1>
              <Number>{initState + 1}</Number>
              <SubNumber>{initMonth}</SubNumber>
              <Icon2 onClick={()=>{remove()}}></Icon2>
            </Div>
            <Div bg="w">
                <IconA></IconA>
                <div>
                <Des>Running</Des>
                <span>
                <Stats>7km</Stats><Stats2> /10km</Stats2>
                </span>
                </div>
            </Div>
            <Div bg="w">
                <IconB></IconB>
                <div>
                <Des>Swimming</Des>
                <span>
                <Stats>5km</Stats><Stats2> /10km</Stats2>
                </span>
                </div>
            </Div>
            <Div bg="w">
                <IconC></IconC>
                <div>
                <Des>Bike</Des>
                <span>
                <Stats>8km</Stats><Stats2> /10km</Stats2>
                </span>
                </div>
            </Div>
            
            
          </Card>
        </MainBG>
      </Main>
    </Container>
  );
};

const IconA = styled(TbRun)`
color: rgb(71,139,230);
font-size: 40px;
margin-top: 20px;
`
const IconB = styled(TbSwimming)`
color: rgb(71,139,230);
font-size: 40px;
margin-top: 20px;
`

const IconC = styled(TbBike)`
color: rgb(71,139,230);
font-size: 40px;
margin-top: 20px;
`

const Stats = styled.span`
font-weight: 700;
color: black;
font-size: 12px;
`
const Stats2 = styled.span`
font-weight: 200;
color: black;
font-size: 12px;

`
const Des = styled.div`
color: gray;
font-weight: 700;
font-size: 14px;
text-transform: uppercase;

`

const Icon2 = styled(RiArrowDropDownLine)`
font-size: 30px;
margin: 10px 0px;
/* background-color: silver; */
border-radius: 5px;
width: 60px;
height: 55px;
display: flex;
justify-content: center;
align-items: center;
transition: all 400ms;
:hover{
    background-color: rgba(225, 225, 225, 0.3);
    cursor: pointer;
}`
const Icon1 = styled(RiArrowDropUpLine)`

font-size: 30px;
margin: 10px 0px;
border-radius: 5px;
width: 60px;
height: 55px;
display: flex;
justify-content: center;
align-items: center;
transition: all 400ms;
:hover{
    background-color: rgba(225, 225, 225, 0.3);
    cursor: pointer;
}

`
const Number = styled.div`
font-size: 55px;
font-weight: 700;
line-height: 0.85
`
const SubNumber = styled.div``
const Div = styled.div<{ bg: string }>`
  width: 110px;

  height: 80%;
  background-color: ${({ bg }) => (bg ? "white" : "transparent")};
  border-radius: 3px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition: ease-in-out 800ms;
    :hover{
        transform: scale(1.10);
        cursor: pointer;
    }

`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 500px;
  height: 200px;
  border-radius: 10px;
  background: rgb(254, 231, 251);
  background: linear-gradient(
    60deg,
    rgba(254, 231, 251, 1) 0%,
    rgba(6, 103, 156, 1) 0%,
    rgba(95, 192, 231, 1) 100%
  );
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const Container = styled.div`
  height: calc(100vh - 155px);
  width: 100%;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 400px;
  border-radius: 10px;
  background: rgb(254, 231, 251);
  background: linear-gradient(
    318deg,
    rgba(254, 231, 251, 1) 0%,
    rgba(229, 242, 249, 1) 39%,
    rgba(234, 249, 255, 1) 95%
  );
  /* background-color: rgba(0,0,0, 0.4); */
`;
const MainBG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  border-radius: 10px;

  background: radial-gradient(rgba(0, 0, 0, 0.2) 8%, transparent 2%);
  background-position: 0% 0%;
  background-size: 3vmin 3vmin;
`;
