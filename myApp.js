let express = require("express");
let app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.use("/json", function (req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});
app.get("/json", function (req, res) {
  res.json({
    message:
      process.env.MESSAGE_STYLE === "uppercase"
        ? "Hello json".toUpperCase()
        : "Hello json",
  });
});

pp.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  }
);

app.get("/:word/echo", function (req, res) {
  res.json({ echo: req.params.word });
});

module.exports = app;
