const express = require('express');
const repairController = require('./../controllers/repairs.controller');

const router = express.Router();
// TODO: Definir End points

router
  .route('/')
  .get(repairController.findAllRepairs)
  .post(repairController.createRepair);

router
  .route('/:id')
  .get(repairController.findRepair)
  .patch(repairController.update)
  .delete(repairController.delete);

module.exports = router;
