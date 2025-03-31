import * as Joi from 'joi';

export default Joi.object({
  NODE_ENV: Joi.string()
    .valid('production', 'development', 'test', 'staging')
    .default('development'),
  MONGODB_URI: Joi.string().required(),
  PORT: Joi.number().default(8888),
  HOST: Joi.string().default('0.0.0.0'),
});
