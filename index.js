const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "This is a book directory" });
});

app.use("/api/books", require("./routes/books"));
app.use("/api/users", require("./routes/users"));

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
