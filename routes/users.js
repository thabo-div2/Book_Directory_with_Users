const express = require("express");
const knex = require("../db/knex");

const router = express.Router();

router.get("/", async (req, res) => {
	let users = await knex.select("*").from("users");

	res.status(200).json({ users });
});

module.exports = router;
