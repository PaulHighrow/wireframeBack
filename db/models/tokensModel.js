const { Schema, model } = require('mongoose');

const tokens = new Schema(
  {
    token_type: {
      type: String,
      required: [true, 'No token type'],
    },
    expires_in: {
      type: String,
      required: [true, 'No expiration number'],
    },
    access_token: {
      type: String,
      required: [true, 'No access token'],
    },
    refresh_token: {
      type: String,
      required: [true, 'No refresh token'],
    },
  },
  {
    versionKey: true,
    timestamps: true,
  }
);

const Tokens = model('tokens', tokens);

module.exports = Tokens;