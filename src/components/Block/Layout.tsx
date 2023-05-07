import React from "react";
import { Header } from "./Header";
import { Sider } from "./Sider";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import styled from "styled-components";

export const Layout = () => {
  return (
    <div>
      <Header />
      <MidPart>
        <Sider />
        <Outlet />
      </MidPart>
      <Footer />
    </div>
  );
};

const MidPart = styled.div`
display: flex;
`;
