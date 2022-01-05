const withTM = require("next-transpile-modules")(["ui", "sudoku"]);

module.exports = withTM({
  reactStrictMode: true,
});
