import { throttle } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import styled from "styled-components";
import { getIssueList } from "../../api/issue";
import IssueShort from "../../components/IssueShort";

const Wrapper = styled.div`
  height: calc(100vh - 100px);
`;

const Main = () => {
  const { mutateAsync: issueListMutate } = useMutation(getIssueList);
  const [isEnd, setIsEnd] = useState(false);
  const [page, setPage] = useState(1);
  const [issueList, setIssueList] = useState([]);

  const lockScroll = useCallback(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = "";
  }, []);

  const handleScroll = throttle(async () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setIsEnd(true);
      lockScroll();
      const data = await issueListMutate(page);
      setPage(page + 1);
      setIssueList((prev) => [...prev, ...data]);
      unlockScroll();
      setIsEnd(false);
    }
  }, 300);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <Wrapper>
      {issueList &&
        issueList.map((issue, idx) => {
          return <IssueShort key={issue.id} {...issue} />;
        })}
      {isEnd && "로딩컴포넌트"}
    </Wrapper>
  );
};
export default Main;
