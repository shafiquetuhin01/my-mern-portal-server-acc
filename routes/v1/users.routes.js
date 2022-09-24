const express = require("express");
const usersController = require("../../controllers/users.controller");
const limiter = require("../../middleware/limiter");
const viewCount = require("../../middleware/viewCount");
const router = express.Router();

// router.get('/:id', )
// router.post('/', )

router.route('/')
/**
   * @api {get} /users All users
   * @apiDescription Get all the users
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the users.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(usersController.getAllUsers)
  /**
   * @api {post} /users save a tool
   * @apiDescription Get all the users
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the users.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  
  .post(usersController.saveUser);
  router.route("/:id").get(viewCount, limiter, usersController.getUsersDetails);

module.exports = router;
