const mongoose = require('mongoose');
// const validator = require('validator');
// const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
// const { roles } = require('../config/roles');

const pokemonSchema = mongoose.Schema(
  {
    pokedexId: {
      type: Number,
      required: true,
      trim: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    typeList: {
      type: [String],
      required: true,
      trim: true,
    },
    rarity: {
      type: Number,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    height: {
      type: Number,
      required: true,
      trim: true,
    },
    weight: {
      type: Number,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    imageShiny: {
      type: String,
      required: true,
      trim: true,
    },
    species: {
      type: String,
      required: true,
      trim: true,
    },
    isShiny: {
      type: Boolean,
      required: true,
    },
    stats: {
      atq: {
        type: Number,
        required: true,
        trim: true,
      },
      def: {
        type: Number,
        required: true,
        trim: true,
      },
      hp: {
        type: Number,
        required: true,
        trim: true,
      },
      spd: {
        type: Number,
        required: true,
        trim: true,
      },
    },
    nextEvolution: {
      id: {
        type: Number,
        trim: true,
      },
      image: {
        type: String,
        trim: true,
      },
      imageShiny: {
        type: String,
        trim: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
pokemonSchema.plugin(toJSON);
pokemonSchema.plugin(paginate);

// /**
//  * Check if email is taken
//  * @param {string} email - The user's email
//  * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
//  * @returns {Promise<boolean>}
//  */
// userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
//   const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
//   return !!user;
// };
//
// /**
//  * Check if password matches the user's password
//  * @param {string} password
//  * @returns {Promise<boolean>}
//  */
// userSchema.methods.isPasswordMatch = async function (password) {
//   const user = this;
//   return bcrypt.compare(password, user.password);
// };
//
// userSchema.pre('save', async function (next) {
//   const user = this;
//   if (user.isModified('password')) {
//     user.password = await bcrypt.hash(user.password, 8);
//   }
//   next();
// });

/**
 * @typedef Pokemon
 */
const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;
