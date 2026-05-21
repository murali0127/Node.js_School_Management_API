module.exports = success = (res, statusCode, message, data = null) =>
      res.status(statusCode).json({ success: true, message, data });


// module.export = error = (res, statusCode, message) => {
//       res.status(statusCode).json({ success: false, message: message })
// }