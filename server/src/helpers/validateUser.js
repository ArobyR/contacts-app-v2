import Joi from "joi";

const validateUser = (username_, email_, password_) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string()
      .min(6)
      .max(30)
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
  });

  return schema.validate({
    username: username_ || "",
    email: email_ || "",
    password: password_ || "",
  });
};

export default validateUser
