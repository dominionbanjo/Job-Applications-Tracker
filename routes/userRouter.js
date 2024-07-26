import { Router } from "express";
const router = Router();

import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from "../controllers/userController.js";
import {
  authenticateUser,
  authorizePermissions,
} from "../middleware/authMiddleware.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";

router.get("/current-user", authenticateUser, getCurrentUser);
router.get(
  "/admin/app-stats",
  authenticateUser,
  authorizePermissions("admin"),
  getApplicationStats
);
router.patch(
  "/update-user",
  authenticateUser,
  validateUpdateUserInput,
  updateUser
);
export default router;
