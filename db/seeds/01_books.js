const { v4 } = require("uuid");

exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("books").del();
	await knex("books").insert([
		{
			id: v4(),
			title: "Harry Potter and the Philosopher's Stone",
			genre: "Fantasy",
			author: "JK Rowling",
		},
		{
			id: v4(),
			title: "Harry Potter and the Chamber of Secrets",
			genre: "Fantasy",
			author: "JK Rowling",
		},
		{
			id: v4(),
			title: "Harry Potter and the Prisoner of Azkaban",
			genre: "Fantasy",
			author: "JK Rowling",
		},
	]);
};
