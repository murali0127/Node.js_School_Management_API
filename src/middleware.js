const ApiError = require('./utils/apiError');

const validate = (schema, source = 'body') => (req, res, next) => {
      const { error, value } = schema.validate(req[source], {
            abortEarly: false,
            stripUnknown: true,
            convert: true,
      });

      if (error) {
            const details = error.details.map((d) => ({
                  field: d.path.join('.'),
                  message: d.message,
            }));
            return next(new ApiError(400, 'Validation failed', details));
      }

      req[source] = value;
      next();
};

module.exports = validate;
