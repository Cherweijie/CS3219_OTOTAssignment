// Initialize express router
let router = require("express").Router();
// Set default API response
router.get("/", function (req, res) {
  res.json({
    status: "Hooray! The API is working!",
    message: "Welcome to RESTContacts, where you can implement simple API calls for a list of contacts!",
  });
});
// Import contact controller
var contactController = require("./contactController");
// Contact routes
router
  .route("/contacts")
  .get(contactController.index)
  .post(contactController.new);
router
  .route("/contacts/:contact_id")
  .get(contactController.view)
  .patch(contactController.update)
  .put(contactController.update)
  .delete(contactController.delete);
// Export API routes
module.exports = router;
