const { Model } = require("objection");

class Genre extends Model {
	static get tableName() {
		return "genre";
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

module.exports = Genre;
