import { useQuery } from "react-query";
import { getIssueList } from "../../api/issue";
import IssueShort from "../../components/IssueShort";

const Main = () => {
  const { data, isLoading, isSuccess } = useQuery(["issues", 1], getIssueList);

  return (
    <div>
      {isSuccess &&
        data.map((issue, idx) => {
          return <IssueShort key={issue.id} {...issue} />;
        })}
      {isLoading && "로딩컴포넌트"}
    </div>
  );
};
export default Main;
