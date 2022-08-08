const express = require("express");
const todoApp = express();
const packageJson = require("../package.json")

todoApp.get("/health", (req, res, next) => {
  res.json({
    success: true,
    version: packageJson.version
  });
});

module.exports.todoApp = todoApp;