const { Model } = require("objection");

class Author extends Model {
	static get tableName() {
		return "author";
	}

	static get jsonSchema() {
		return {
			type: "object",
			required: ["name"],
			properties: {
				id: {
					type: "string",
					format: "uuid",
				},
				name: {
					type: "string",
					minLength: 1,
					maxLength: 255,
				},
			},
		};
	}
}

module.exports = Author;
