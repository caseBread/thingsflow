import axios from "axios";

export const getIssues = async ({ queryKey }) => {
  const [_, organName, repoName, page] = queryKey;

  const { data } = await axios.get(
    `https://api.github.com/repos/${organName}/${repoName}/issues`,

    { params: { page, state: "open", sort: "comments" } }
  );

  const issueData = data.map((issue, idx) => {
    return {
      id: issue.id,
      url: issue.url,
      title: issue.title,
      issueNumber: issue.number,
      userName: issue.user.login,
      date: issue.created_at,
      comments: issue.comments,
    };
  });

  return issueData;
};
