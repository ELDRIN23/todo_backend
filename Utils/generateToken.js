import jwt from "jsonwebtoken";

export const generateToken = (id) => {
  return jwt.sign(
    { id }, // payload
    process.env.JWT_SECRET, // secret from .env
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" } // default 7 days
  );
};
