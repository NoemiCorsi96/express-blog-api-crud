function serverError(err, req, res, next) {
  res.status(500);
  res.jason({
    error: true,
    message: err.message,
    stack:err.stack
  })
}

module.exports = serverError;