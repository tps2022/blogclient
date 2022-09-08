import axios from "axios";

const url = "http://127.0.0.1:3000/blogs";

export const fetchBlogPosts = () => axios.get(url);
export const addNewBlogPost = (newBlog) => axios.post(url, newBlog);
export const editSingleBlogPost = (id, editedBlogPost) =>
  axios.patch(`${url}/${id}`, editedBlogPost);
export const upvoteSingleBlogPost = (id) =>
  axios.patch(`${url}/${id}/likedBlogPost`);
export const removeBlogPost = (id) => axios.delete(`${url}/${id}`);