const getTime = (req, res, next) => {
  const t = new Date();
  res.timeNow = `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}\t${t.getFullYear()}-${
    t.getMonth() + 1
  }-${t.getDate()}`;
  next();
};

exports.getTime = getTime;
