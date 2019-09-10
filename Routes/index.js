const UserRoutes = require("./user");

module.exports = function(router) {
  router.use("/", UserRoutes());
  return router;
};
