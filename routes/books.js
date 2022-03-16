const express = require("express");
const knex = require("../db/knex");
const router = express.Router();

// controllers
const BookController = require("../controller/BookController");

router.get("/", async (req, res) => {
	// res.send("This is the books route");
	return await BookController.getAllBooks(req, res);
});

router.get("/:id", async (req, res) => {
	return await BookController.getSingleBook(req, res);
});

router.post("/", async (req, res) => {
	return await BookController.addNewBook(req, res);
});

router.put("/:id", async (req, res) => {
	return await BookController.updateBook(req, res);
});

router.delete("/:id", async (req, res) => {
	return await BookController.deleteBook(req, res);
});

module.exports = router;
