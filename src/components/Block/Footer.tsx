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
  background: rgb(254, 231, 251);
  background: linear-gradient(
    60deg,
    rgba(254, 231, 251, 1) 0%,
    rgba(6, 103, 156, 1) 0%,
    rgba(95, 192, 231, 1) 100%
  );
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
