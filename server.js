const { todoApp } = require("./src/app");
const PORT = process.env.PORT || 9000;

todoApp.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
