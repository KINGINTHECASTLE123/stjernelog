import { Router } from "express";

const router = Router();

router.get("/api/observations", (req, res) => {
  res.send({ data: [] });
});

export default router;
