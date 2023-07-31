const Joi = require("joi");

const leadSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  phone: Joi.string().min(3).max(20).required(),
});

const validateLead = ({ body }, res, next) => {
  const { error } = leadSchema.validate(body);

  if (error) return res.status(error.status).json(error.details[0].message);

  next();
};

module.exports = {
  validateLead,
};
