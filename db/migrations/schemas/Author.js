const authorSchema = (table) => {
	table.uuid("id").primary().unique();
	table.string("name").notNullable();
};

module.exports = authorSchema;
