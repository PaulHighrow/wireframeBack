const wakeUp = async (_, res, next) => {
  res.status(200).json("Okay, I'm awake");
  next();
};

module.exports = wakeUp;
