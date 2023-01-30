import { Link } from "react-router-dom";
import styled from "styled-components";
import { ORGAN_NAME, REPO_NAME } from "../../util/constants";

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  font-size: 1.25rem;
  font-weight: 600;
`;

const MainRedirect = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Header = () => {
  return (
    <Wrapper>
      <MainRedirect to="/">
        {ORGAN_NAME} / {REPO_NAME}
      </MainRedirect>
    </Wrapper>
  );
};
export default Header;
