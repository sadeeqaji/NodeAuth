const UserRoutes = require("./Users");

module.exports = function(router) {
  router.use("/", UserRoutes());
  return router;
};
