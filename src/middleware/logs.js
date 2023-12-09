const logRequest = (req, res, next) => {
  const auth = "yahya";
  if (auth === "yahya") {
    console.log("ini middleware : ", req.path);
    next();
  } else {
    res.status(401).json({
      message: "Anda tidak memiliki akses API",
    });
  }
};

module.exports = logRequest;
