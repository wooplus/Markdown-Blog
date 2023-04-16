const express = require("express");
const app = express();
const articleRouter = require("./routes/articles");

app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article",
      createdAt: Date.now(),
      description: "Test description",
    },
    {
      title: "Test Article2",
      createdAt: Date.now(),
      description: "Test description",
    },
  ];

  res.render("articles/index.ejs", { articles: articles });
});

app.listen(4000, () => {
  console.log("server listening");
});
