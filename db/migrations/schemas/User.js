const userSchema = (table) => {
	table.uuid("id").primary().unique();
	table.string("name").notNullable();
	table.string("surname").notNullable();
	table.date("DOB").notNullable();
	table.string("email").notNullable().unique();
	table.string("password").notNullable();
};

module.exports = userSchema;
