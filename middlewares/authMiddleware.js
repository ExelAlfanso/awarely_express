import jwt from "jsonwebtoken";

export default function authenticateToken(req, res, next) {
  const accessToken = req.cookies?.accessToken;
  if (!accessToken)
    return res.status(401).json({ message: "No cookies provided." });

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token." });
  }
}
