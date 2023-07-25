const { Schema, model } = require('mongoose');

const leads = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name'],
    },
    phone: {
      type: String,
      required: [true, 'Set phone number'],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Leads = model('leads', leads);

module.exports = Leads;