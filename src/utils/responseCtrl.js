export const responseCtrl = (res, statusCode, data) => {
  res.status(statusCode).json({ error: false, data });
};
