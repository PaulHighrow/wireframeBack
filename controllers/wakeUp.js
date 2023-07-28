const wakeUp = async (_, res) => {
  return res.status(200).json("Okay, I'm awake");
};

module.exports = wakeUp;
