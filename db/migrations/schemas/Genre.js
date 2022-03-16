const genreSchema = (table) => {
	table.uuid("id").primary().unique();
	table.string("name").notNullable();
};

module.exports = genreSchema;
