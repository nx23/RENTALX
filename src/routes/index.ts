import { Router } from "express";
import { categoriesRouter } from "../routes/categories.routes";
import { specificationsRoutes } from "../routes/specifications.routes";

const router = Router();

router.use("/categories", categoriesRouter);
router.use("/specifications", specificationsRoutes);

export { router }