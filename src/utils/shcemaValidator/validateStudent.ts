import Joi, { ObjectSchema } from "joi";

const validateStudent: Joi.ObjectSchema<string[]> = Joi.object({
  name: Joi.string().required().min(4).max(30),
  email: Joi.string().email().required(),
  age: Joi.number().required().max(100),
  grade: Joi.string().required(),
});
export default validateStudent;
