const bookGenreSchema = (table) => {
	table
		.uuid("genre_id")
		.notNullable()
		.references("id")
		.inTable("genre")
		.onDelete("CASCADE")
		.onUpdate("CASCADE");
	table
		.uuid("books_id")
		.notNullable()
		.references("id")
		.inTable("books")
		.onDelete("CASCADE")
		.onUpdate("CASCADE");
	table.uuid("id").primary().unique();
};

module.exports = bookGenreSchema;
