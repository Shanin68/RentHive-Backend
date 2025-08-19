import { db } from "../server.js";

// Add a new post
export const addPost = (postData, callback) => {
  const {
    title,
    description,
    available_from,
    gender,
    rent,
    location,
    images,
    posted_by,
  } = postData;
  db.query(
    "INSERT INTO posts (title, description, available_from, gender, rent, location, images, posted_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      title,
      description,
      available_from,
      gender,
      rent,
      location,
      JSON.stringify(images),
      posted_by,
    ],
    (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    }
  );
};

// Get all posts
export const getAllPosts = (callback) => {
  db.query("SELECT * FROM posts", (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

// Get post by ID
export const getPostById = (id, callback) => {
  db.query("SELECT * FROM posts WHERE id = ?", [id], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

// Update post
export const updatePost = (id, postData, callback) => {
  const {
    title,
    description,
    available_from,
    gender,
    rent,
    location,
    images,
    studentId,
  } = postData;
  db.query(
    "UPDATE posts SET title = ?, description = ?, available_from = ?, gender = ?, rent = ?, location = ?, images = ? WHERE id = ? AND posted_by = ?",
    [
      title,
      description,
      available_from,
      gender,
      rent,
      location,
      JSON.stringify(images),
      id,
      studentId,
    ],
    (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    }
  );
};

// Delete post
export const deletePost = (id, callback) => {
  db.query("DELETE FROM posts WHERE id = ?", [id], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};
