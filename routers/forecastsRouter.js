import { Router } from "express";

const router = Router();

router.get("/api/forecasts", (req, res) => {
  res.send({ data: [] });
});

export default router;
