import createError from "http-errors"

export const error404 = (req, res, next) => {
    next(createError(404, "Not found"))
}

export const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
}
