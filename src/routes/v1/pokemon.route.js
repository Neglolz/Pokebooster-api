const express = require('express');
// const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
// const pokemonValidation = require('../../validations/pokemon.validation');
const pokemonController = require('../../controllers/pokemons.controller');

const router = express.Router();

router.route('/').post(pokemonController.createPokemon).get(pokemonController.getPokemons);

router
  .route('/:pokemonId')
  .get(pokemonController.getPokemon)
  .patch(pokemonController.updatePokemon)
  .delete(pokemonController.deletePokemon);

module.exports = router;
