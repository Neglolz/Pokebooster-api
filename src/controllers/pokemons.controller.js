const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { pokemonService } = require('../services');

const createPokemon = catchAsync(async (req, res) => {
  const pokemon = await pokemonService.createPokemon(req.body);
  res.status(httpStatus.CREATED).send(pokemon);
});

const getPokemons = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await pokemonService.queryPokemons(filter, options);
  res.send(result);
});

const getPokemon = catchAsync(async (req, res) => {
  const pokemon = await pokemonService.getPokemonById(req.params.pokemonId);
  if (!pokemon) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Pokemon not found');
  }
  res.send(pokemon);
});

const updatePokemon = catchAsync(async (req, res) => {
  const pokemon = await pokemonService.updatePokemonById(req.params.pokemonId, req.body);
  res.send(pokemon);
});

const deletePokemon = catchAsync(async (req, res) => {
  await pokemonService.deletePokemonById(req.params.pokemonId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createPokemon,
  getPokemons,
  getPokemon,
  updatePokemon,
  deletePokemon,
};
