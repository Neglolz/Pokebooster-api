const httpStatus = require('http-status');
const { Pokemon } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a pokemon
 * @param {Object} pokemonBody
 * @returns {Promise<Pokemon>}
 */
const createPokemon = async (pokemonBody) => {
  return Pokemon.create(pokemonBody);
};

/**
 * Query for pokemons
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryPokemons = async (filter, options) => {
  const pokemons = await Pokemon.paginate(filter, options);
  return pokemons;
};

/**
 * Get pokemon by id
 * @param {ObjectId} id
 * @returns {Promise<Pokemon>}
 */
const getPokemonById = async (id) => {
  return Pokemon.findOne({ pokedexId: id });
};

// /**
//  * Get pokemon by email
//  * @param {string} email
//  * @returns {Promise<Pokemon>}
//  */
// const getPokemonByEmail = async (email) => {
//   return Pokemon.findOne({ email });
// };

// /**
//  * Update pokemon by id
//  * @param {ObjectId} pokemonId
//  * @param {Object} updateBody
//  * @returns {Promise<Pokemon>}
//  */
// const updatePokemonById = async (pokemonId, updateBody) => {
//   const pokemon = await getPokemonById(pokemonId);
//   if (!pokemon) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Pokemon not found');
//   }
//   if (updateBody.email && (await Pokemon.isEmailTaken(updateBody.email, pokemonId))) {
//     throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
//   }
//   Object.assign(pokemon, updateBody);
//   await pokemon.save();
//   return pokemon;
// };

// /**
//  * Delete pokemon by id
//  * @param {ObjectId} pokemonId
//  * @returns {Promise<Pokemon>}
//  */
// const deletePokemonById = async (pokemonId) => {
//   const pokemon = await getPokemonById(pokemonId);
//   if (!pokemon) {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Pokemon not found');
//   }
//   await pokemon.remove();
//   return pokemon;
// };

module.exports = {
  createPokemon,
  queryPokemons,
  getPokemonById,
  // getPokemonByEmail,
  // updatePokemonById,
  // deletePokemonById,
};
