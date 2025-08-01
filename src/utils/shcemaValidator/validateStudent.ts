import Joi, { ObjectSchema } from "joi";
interface validate{
    name: string;
    email:string;
    age:number;
    grade:string;
}
const validateStudent: Joi.ObjectSchema<validate> = Joi.object({
  name: Joi.string().required().min(4).max(30),
  email: Joi.string().email().required(),
  age: Joi.number().required().max(100),
  grade: Joi.string().required(),
});
export default validateStudent;
