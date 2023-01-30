import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 1rem;
  gap: 1rem;

  text-decoration: none;
  color: black;

  border-bottom: 1px solid gray;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Top = styled.div`
  display: flex;
  gap: 0.5rem;
`;
const IssueIndex = styled.span`
  white-space: nowrap;
`;
const Title = styled.span`
  width: 100%;
`;
const Bottom = styled.div`
  font-size: 0.75rem;
`;
const Right = styled.div`
  width: 100px;
`;
const IssueShort = ({ issueNumber, title, userName, date, comments }) => {
  return (
    <Wrapper to={`/issue?number=${issueNumber}`}>
      <Left>
        <Top>
          <IssueIndex>#{issueNumber}</IssueIndex>
          <Title>{title}</Title>
        </Top>
        <Bottom>
          <span>작성자: {userName}</span>
          <span>작성일: {date}</span>
        </Bottom>
      </Left>
      <Right>코멘트: {comments}</Right>
    </Wrapper>
  );
};
export default IssueShort;
