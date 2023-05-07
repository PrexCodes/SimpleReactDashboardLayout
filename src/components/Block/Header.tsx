import React from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

export const Header = () => {
  return (
    <Container>
      <Main>
        <Div>
          <Logo> Logo</Logo>
          <Text> Browse </Text>
          <Icon />
        </Div>
        <Div>
          <SearchHolder>
            <SearchBar placeholder="Search Here"></SearchBar>
            <SIcon></SIcon>
          </SearchHolder>
        </Div>
        <Div> 3 </Div>
      </Main>
    </Container>
  );
};

const SearchBar = styled.input`
height: 95%;
flex: 1;
width: 180px;
padding: 0px 20px;
outline: none;
:active{
  outline: 1.5px solid purple;
  border: 1.5px solid purple;
}

`;
const SIcon = styled(AiOutlineSearch)`
font-size: 22px;
margin: 10px;
`;
const SearchHolder = styled.div`
height: 42.5px;
width: 260px;
background-color: gray;
display: flex;
align-items: center;
border-radius: 0px 10px 10px 0px;
color: white;
cursor: pointer;



`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  width: 40px;
  background-color: gray;
  padding: 10px;
  margin-right: 10px;
`;
const Text = styled.div`
  font-weight: 700;
  :hover {
    color: purple;
    cursor: pointer;
  }
  margin-right: 15px;
`;
const Icon = styled(BsThreeDotsVertical)`
  font-size: 20px;
  padding: 8px;
  border-radius: 3px;
  margin-top: 3px;
  :hover {
    background-color: #ece9e9;
    cursor: pointer
  }
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid silver;
  border-bottom: 1px solid silver;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;
const Main = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
