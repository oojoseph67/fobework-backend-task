import * as Joi from 'joi';

export default Joi.object({
  NODE_ENV: Joi.string()
    .valid('production', 'development', 'test', 'staging')
    .default('development'),
  MONGODB_URI: Joi.string().required(),
  PORT: Joi.number().default(8111),
  HOST: Joi.string().default('0.0.0.0'),
  JWT_SECRET: Joi.string().required(),
  JWT_TOKEN_AUDIENCE: Joi.string().required(),
  JWT_TOKEN_ISSUER: Joi.string().required(),
  JWT_ACCESS_TOKEN_TIME_TO_LIVE: Joi.number().required(),
  JWT_REFRESH_TOKEN_TIME_TO_LIVE: Joi.number().required(),
});
