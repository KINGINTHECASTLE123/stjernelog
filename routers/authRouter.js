import { Router } from "express";

const router = Router();

router.post("/api/signup", (req, res) => {
  res.status(501).send({ message: "Not implemented yet" });
});

router.post("/api/login", (req, res) => {
  res.status(501).send({ message: "Not implemented yet" });
});

export default router;
