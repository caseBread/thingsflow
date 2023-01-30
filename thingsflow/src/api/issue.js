import axios from "axios";
import { ORGAN_NAME, REPO_NAME } from "../util/constants";

export const getIssueList = async (page) => {
  const { data } = await axios.get(
    `https://api.github.com/repos/${ORGAN_NAME}/${REPO_NAME}/issues`,

    { params: { page, state: "open", sort: "comments" } }
  );

  const issueList = data.map((issue, idx) => {
    return {
      id: issue.id,
      title: issue.title,
      issueNumber: issue.number,
      userName: issue.user.login,
      userProfile: issue.user.avatar_url,
      date: issue.created_at,
      comments: issue.comments,
    };
  });
  console.log(issueList);

  return issueList;
};

export const getIssue = async (issueNumber) => {
  const { data } = await axios.get(
    `https://api.github.com/repos/${ORGAN_NAME}/${REPO_NAME}/issues/${issueNumber}`
  );
  console.log(data);
  const issue = {
    id: data.id,
    url: data.url,
    title: data.title,
    issueNumber: data.number,
    userName: data.user.login,
    userProfile: data.user.avatar_url,
    date: data.created_at,
    comments: data.comments,
    body: data.body,
  };
  return issue;
};
