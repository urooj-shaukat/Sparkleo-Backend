const Joi = require('joi');

const userValidation = {
  validateUserRegistration: (data) => {
    const schema = Joi.object({
      username: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });

    return schema.validate(data);
  },

  validateUserLogin: (data) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    return schema.validate(data);
  },
};

module.exports = userValidation;
