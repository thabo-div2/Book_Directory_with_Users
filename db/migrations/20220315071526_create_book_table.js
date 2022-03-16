exports.up = function (knex) {
	return knex.schema
		.createTable("books", require("./schemas/Books"))
		.createTable("author", require("./schemas/Author"))
		.createTable("genre", require("./schemas/Genre"))
		.createTable("users", require("./schemas/User"))
		.createTable("books_author", require("./schemas/Book_Author"))
		.createTable("books_genre", require("./schemas/Book_Genre"));
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists("books_genre")
		.dropTableIfExists("books_author")
		.dropTableIfExists("genre")
		.dropTableIfExists("author")
		.dropTableIfExists("books")
		.dropTableIfExists("users");
};
