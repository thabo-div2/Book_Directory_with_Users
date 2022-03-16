const { Model } = require("objection");

class Books extends Model {
	static get tableName() {
		return "books";
	}

	static get relationMappings() {
		// const Author = require("./Author");
		return {
			author: {
				relation: Model.HasManyRelation,
				modelClass: "Author",
				join: {
					from: "books.id",
					through: {
						from: "books_author.books_id",
						to: "books_author.author_id",
					},
					to: "author.id",
				},
			},
			genre: {
				relation: Model.HasManyRelation,
				modelClass: "Genre",
				join: {
					from: "books.id",
					through: {
						from: "books_genre.books_id",
						to: "books_genre.genre_id",
					},
					to: "genre.id",
				},
			},
		};
	}

	static get jsonSchema() {
		return {
			type: "object",
			required: ["title", "genre", "author"],
			properties: {
				id: {
					type: "string",
					format: "uuid",
				},
				title: {
					type: "string",
					minLength: 1,
					maxLength: 255,
				},
				genre: {
					type: "string",
					minLength: 1,
					maxLength: 255,
				},
				author: {
					type: "string",
					minLength: 1,
					maxLength: 255,
				},
			},
		};
	}
}

module.exports = Books;
