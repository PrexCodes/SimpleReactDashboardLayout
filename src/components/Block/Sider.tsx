import React, { useState } from "react";
import styled from "styled-components";
import {BsArrowBarLeft, BsArrowBarRight} from 'react-icons/bs'

export const Sider = () => {

  const [initState, newState] = useState<boolean>(false)

  function ontoggle(){
    newState(!initState)
  }

  return (
    <Container ww={initState}>
      <IconWrapper onClick={ontoggle}>
      {initState ? <Icon1/> : <Icon2/>}
      </IconWrapper>
    </Container>
  );
};

const IconWrapper = styled.div``
const Icon1 = styled(BsArrowBarRight)`
font-size: 30px;
:hover{
  cursor: pointer;
  transform: scale(1.09);
}
`
const Icon2 = styled(BsArrowBarLeft)`
font-size: 30px;
:hover{
  cursor: pointer;
  transform: scale(1.09);
}
`


const Container = styled.div<{ww:any}>`
height: calc(100vh - 155px);
width: ${({ww})=>ww ? '30px' : '200px'};
background-color: #2a2929;
color: white;
justify-content: flex-end;
/* display: flex; */
`

