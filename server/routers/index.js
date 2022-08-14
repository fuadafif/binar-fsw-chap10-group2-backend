// import router
const router = require("express").Router();

// import controller
const userController = require("../controllers/user");
const biodata = require('../controllers/biodata');

//  import middleware
const jwtMiddleware = require("../middlewares/jwt");

// api user
router.post("/login", userController.login);
router.post("/register", userController.register);
router.get("/players", userController.showPlayers);
router.post("/biodata", biodata.addBiodata);
router.get("/biodata/:id_user", biodata.getBiodata);

// api game, menggunakan middleware jwt
// router.post("/create-room", jwtMiddleware.jwtAuthorization, roomController.create);
// router.post("/join-room", jwtMiddleware.jwtAuthorization, roomController.join);
// router.post("/fight", jwtMiddleware.jwtAuthorization, roomController.fight);

module.exports = router;
