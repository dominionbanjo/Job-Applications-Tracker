import {
  UnauthenticatedError,
  UnauthorizedError,
  BadRequestError,
} from "../errors/customError.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    throw new UnauthenticatedError("authentication invalid");
  }

  try {
    const { userId, role } = verifyJWT(token);
    const testUser =
      userId === "66b0dd9e26a03e80c615954a" ||
      userId === "66b607556c7103b338c4e876";
    req.user = { userId, role, testUser };
    next();
  } catch (error) {
    throw new UnauthenticatedError("authentication invalid");
  }
};

export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser) throw new BadRequestError("Demo user, read only!");
  next();
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError("not authorized to access this route");
    }
    next();
  };
};
