import axios from 'axios';

const apiUrl = axios.create({
  baseURL: 'https://andis-news-app.onrender.com/api'
});

export const getArticles = (path) => {
  return apiUrl.get(path).then(resp => {
    return resp.data;
  });
};

export const getArticleComments = (path) => {
  return apiUrl.get(path).then(resp => resp.data.comments);
};

export const getUsers = () => {
  return apiUrl.get(`/users`).then(resp => resp.data);
};

export const getTopics = () => {
  return apiUrl.get('/topics').then(resp => resp.data.topics);
};

export const patchVotes = (path, patchObj) => {
  return apiUrl.patch(path, patchObj).then(resp => {
    return resp.data;
  });
};

export const patchCommentVote = (comment_id, postObj) => {
  return apiUrl.patch(`/comments/${comment_id}`, postObj).then(resp => resp.data.comment);
};

export const postComment = (path, postObj) => {
  return apiUrl.post(path, postObj);
};

export const deleteComment = (path) => {
  return apiUrl.delete(path);
};

export const postNewArticle = (postObj) => {
  return apiUrl.post('/articles', postObj).then(resp => resp.data);
};

export const timeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const [unit, value] of Object.entries(intervals)) {
    const count = Math.floor(seconds / value);
    if (count >= 1) {
      return `${count} ${unit}${count > 1 ? 's' : ''} ago`;
    }
  }
  return "just now";
};

