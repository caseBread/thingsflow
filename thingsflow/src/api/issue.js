import axios from "axios";

export const getIssues = async ({ organName, repoName, page }) => {
  const { data } = await axios.get(
    `https://api.github.com/issues/${organName}/${repoName}`,
    { params: { page } }
  );

  return data;
};
