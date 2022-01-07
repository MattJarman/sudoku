const withTM = require('next-transpile-modules')(['sudoku'])

module.exports = withTM({
  reactStrictMode: true,
})
