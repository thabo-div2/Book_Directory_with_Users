const booksSchema = (table) => {
	table.uuid("id").primary().unique();
	table.string("title").notNullable();
	table.string("genre").notNullable();
	table.string("author").notNullable();
};

module.exports = booksSchema;
