import jwt from "jsonwebtoken";

export const userMiddleware = (req, res, next) => {
  try {
    // Accept Authorization header in a few common shapes
    const authHeader = req.get("Authorization") || req.headers?.authorization || "";

    if (!authHeader) {
      return res.status(401).json({ message: "No token provided!" });
    }

    // Expect format: "Bearer <token>"
    const parts = authHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
      return res.status(401).json({ message: "Invalid Authorization header format" });
    }

    const token = parts[1];
    if (!token || token === "null" || token === "undefined") {
      return res.status(401).json({ message: "Invalid token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // decoded has { id, role }
    console.log("req.user:", req.user);
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
};
