import express from "express";
import {
  getAllList,
  getAllNice,
  getAllNaughty,
  updateNice,
} from "../models/list.js";

export const listRouter = express.Router();

listRouter.get("/", async function (req, res) {
  const allList = await getAllList();
  res.json({
    success: true,
    payload: allList,
  });
});

listRouter.get("/nice", async function (req, res) {
  const allNice = await getAllNice();
  res.json({
    success: true,
    payload: allNice,
  });
});

listRouter.get("/naughty", async function (req, res) {
  const allNaughty = await getAllNaughty();
  res.json({
    success: true,
    payload: allNaughty,
  });
});

listRouter.patch("/:id", async function (req, res) {
  const updatedNice = await updatedNice(req.params.id);
  res.json({
    success: true,
    payload: updatedNice,
  });
});
