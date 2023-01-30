import { useQuery } from "react-query";
import { getIssues } from "../../api/issue";
import IssueShort from "../../components/IssueShort";
import { ORGAN_NAME, REPO_NAME } from "../../util/constants";

const Main = () => {
  const { data, isLoading, isSuccess } = useQuery(
    ["issues", ORGAN_NAME, REPO_NAME, 1],
    getIssues
  );

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
