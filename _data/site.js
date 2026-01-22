const fs = require("fs");

module.exports = function () {
  // Only if it's being locally built, use .env instead of the env set in the CLI or github workflows
  if (fs.existsSync(".env")) {
    try {
      require("dotenv").config();
    } catch (e) {
    }
  }
// use f1driverpedia as a fallback if no env was set
  let base = process.env.SITEBASEURL || process.env.BASEURL || "/f1driverpedia/";
  if (!base.startsWith("/")) base = "/" + base;
  if (!base.endsWith("/")) base = base + "/";

  return {
    baseUrl: base,
  };
};
