import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getIssue } from "../../api/issue";
import IssueShort from "../../components/IssueShort";

const Head = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Profile = styled.img`
  width: 2rem;
  height: 2rem;
`;
const Content = styled.div`
  margin-top: 1rem;
`;

const Issue = () => {
  const [searchParams] = useSearchParams();
  const issueNumber = searchParams.get("number");
  const [issue, setIssue] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const issueData = await getIssue(issueNumber);
      setIssue(issueData);
      setIsLoading(true);
    };

    fetch();
  }, [issueNumber]);

  return (
    <>
      {issue && (
        <>
          <Head>
            <Profile src={issue.userProfile} alt="profile" />
            <IssueShort
              issueNumber={issue.issueNumber}
              title={issue.title}
              userName={issue.userName}
              date={issue.date}
              comments={issue.comments}
            />
          </Head>
          <Content>{issue.body}</Content>
        </>
      )}
      {!isLoading && "로딩컴포넌트"}
    </>
  );
};

export default Issue;
