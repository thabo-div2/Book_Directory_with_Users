const res = require("express/lib/response");
const { v4 } = require("uuid");
// const bcrypt = require("bcryptjs");
const knex = require("../db/knex");
// const config = require("config");
// const creds = require("../config/creds");

const getAllBooks = async (req, res) => {
	try {
		let books = await knex.select("*").from("books");
		res.status(200).json({ books });
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Server not working" });
	}
};

const getSingleBook = async (req, res) => {
	try {
		let bookId = req.params.id;
		let book = await knex
			.select("*")
			.from("books")
			.where("id", bookId)
			.then((book) => {
				// console.log(book[0]);
				return book[0];
			});
		// console.log(book);
		res.status(200).json({ book: book });
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Server not working" });
	}
};

const addNewBook = async (req, res) => {
	try {
		let newBook = {
			id: v4(),
			title: req.body.title,
			genre: req.body.genre,
			author: req.body.author,
		};
		await knex("books")
			.insert(newBook)
			.returning(["*"])
			.then((book) => {
				const bookInfo = book[0];
				res.status(201).json({ bookInfo });
			});
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Server not working" });
	}
};

const updateBook = async (req, res) => {
	try {
		let bookId = req.params.id;
		await knex("books")
			.where("id", bookId)
			.update({
				title: req.body.title,
				genre: req.body.genre,
				author: req.body.author,
			})
			.returning(["*"])
			.then((updatedBook) => {
				res.status(200).json({ updatedBook });
			});
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ msg: "Server not working" });
	}
};

const deleteBook = async (req, res) => {
	let bookId = req.params.id;
	await knex("books")
		.where("id", bookId)
		.del()
		.then(() => {
			res.status(200).json({ msg: "Book been succussfully" });
		});
};

module.exports = {
	getAllBooks,
	getSingleBook,
	addNewBook,
	updateBook,
	deleteBook,
};
