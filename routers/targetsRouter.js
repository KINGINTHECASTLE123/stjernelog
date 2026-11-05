import { Router } from "express";

const router = Router();

router.get("/api/targets", (req, res) => {
  res.send({ data: [] });
});

export default router;
