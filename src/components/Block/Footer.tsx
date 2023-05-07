import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <div>
      <Container>Join Assemblies Now</Container>
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: purple;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
