const express = require('express');
const router = express.Router();
const petsCtrl = require('../../controllers/api/pets');

// Define a route to handle creating a new pet
router.post('/', petsCtrl.create);

// Define a route to handle getting all pets
router.get('/', petsCtrl.index);
// Define a route to handle getting one pet
router.get('/:id', petsCtrl.getOne);


module.exports = router;