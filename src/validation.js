// Validation stuffs


//school validators
const Joi = require('joi');

const addSchoolSchema = Joi.object({
      name: Joi.string().trim().min(2).max(150).required(),
      address: Joi.string().trim().min(5).max(255).required(),
      latitude: Joi.number().min(-90).max(90).required(),
      longitude: Joi.number().min(-180).max(180).required(),
});

const listSchoolsSchema = Joi.object({
      latitude: Joi.number().min(-90).max(90).required(),
      longitude: Joi.number().min(-180).max(180).required(),
});

module.exports = { addSchoolSchema, listSchoolsSchema };
