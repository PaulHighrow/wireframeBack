const Joi = require("joi");

const leadSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  phone: Joi.string().min(3).max(13),
});

const validateLead = ({ body }, res, next) => {
  const { error } = leadSchema.validate(body);

  if (error) return res.status(400).json(error.details[0].message);

  next();
};

module.exports = {
  validateLead,
};
