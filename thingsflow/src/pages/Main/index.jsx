import { useQuery } from "react-query";
import { getIssues } from "../../api/issue";
import { ORGAN_NAME, REPO_NAME } from "../../util/constants";

const Main = () => {
  const { data, isLoading } = useQuery(
    ["issues", ORGAN_NAME, REPO_NAME, 1],
    getIssues
  );

  return (
    <div>
      {data.map((issue, idx) => {
        return <div>{JSON.stringify(issue)}</div>;
      })}
    </div>
  );
};
export default Main;
