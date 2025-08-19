import { db } from "../server.js";

// Get all users
export const getAllUsers = (email, callback) => {
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
    if (err) return callback(err);
    callback(null, result);
  });
};

// Register a new user
export const registerUser = (userData, callback) => {
  const { studentId, name, email, password, gender, idCard } = userData;
  db.query(
    "INSERT INTO users (studentId, name, email, password, gender, idCard) VALUES (?, ?, ?, ?, ?, ?)",
    [studentId, name, email, password, gender, idCard],
    (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    }
  );
};

// Get user by studentId
export const getUserByStudentId = (studentId, callback) => {
  db.query(
    "SELECT * FROM users WHERE studentId = ?",
    [studentId],
    (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    }
  );
};

// Update user
export const updateUser = (studentId, bio, dp, callback) => {
  db.query(
    "UPDATE users SET bio = ?, dp = ? WHERE studentId = ?",
    [bio, dp, studentId],
    (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    }
  );
};

// Delete user
export const deleteUser = (studentId, callback) => {
  db.query(
    "DELETE FROM users WHERE studentId = ?",
    [studentId],
    (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    }
  );
};
