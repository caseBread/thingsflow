import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header";

const Wrapper = styled.main`
  width: 100%;
  margin: auto;
  padding: 2rem 0;
  max-width: 1200px;
`;

const BasicLayout = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};
export default BasicLayout;
