exports.helloFunc = (req, res, next) => {
  res.timeNow = getTime()
  console.log(`APP \nTime: ${res.timeNow}\nReq URL=${req.originalUrl}\n\n`)
  next()
}

function getTime() {
  const t = new Date()
  return `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}\t${t.getFullYear()}-${
    t.getMonth() + 1
  }-${t.getDate()}`
}
