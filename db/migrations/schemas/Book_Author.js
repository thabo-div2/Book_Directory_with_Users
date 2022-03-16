const bookAuthorSchema = (table) => {
	table
		.uuid("books_id")
		.notNullable()
		.references("id")
		.inTable("books")
		.onDelete("CASCADE")
		.onUpdate("CASCADE");
	table
		.uuid("author_id")
		.notNullable()
		.references("id")
		.inTable("author")
		.onDelete("CASCADE")
		.onUpdate("CASCADE");
};

module.exports = bookAuthorSchema;
