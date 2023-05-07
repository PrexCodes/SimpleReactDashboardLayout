import React from "react";
import styled from "styled-components";

export const LandingPage = () => {
  return (
    <Container>
      <Main>
        <MainBG>
          <Card>
            <Div>1</Div>
            <Div>2</Div>
            <Div>3</Div>
            <Div>3</Div>
          </Card>
        </MainBG>
      </Main>
    </Container>
  );
};

const Div = styled.div``;
const Card = styled.div`
width: 500px;
height: 300px;
border-radius: 10px; 
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
  width: 1000px;
  height: 500px;
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
  border: 2px solid black;

  background: radial-gradient(rgba(0, 0, 0, 0.2) 8%, transparent 2%);
  background-position: 0% 0%;
  background-size: 3vmin 3vmin;
`;
