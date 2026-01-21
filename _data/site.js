module.exports = function () {
  let base = process.env.BASEURL || "/";
  if (!base.startsWith("/")) base = "/" + base;
  if (!base.endsWith("/")) base = base + "/";
  return {
    baseUrl: base,
  };
};
