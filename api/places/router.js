const express = require("express");
const {
  createPlace,
  getAllPlace,
  deleteOnePlace,
  updateOnePlace,
  getOnePlace
} = require("./controller");



const router = express.Router();

router.get("/",getAllPlace);
router.put("/:id",updateOnePlace)
router.get("/:id",getOnePlace)
router.delete("/:id",deleteOnePlace)
router.post("/",createPlace)

module.exports = router