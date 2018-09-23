

const cookieOptions = {
  domain: '.manch.' + 'test',
  secure:false,
  maxAge: 1*24*3600 * 1000
}

const cookieDeleteOptions = {
  domain: '.manch.' + 'test',
  secure:false
}

function getCookie (req, name) {
  return req.cookies[name]
}

function setCookie (res, name, value) {
  return res.cookie(name, value, cookieOptions)
}

function deleteCookie (res, name) {
  return res.clearCookie(name, cookieDeleteOptions)
}

module.exports = {
  getCookie: getCookie,
  setCookie: setCookie,
  deleteCookie: deleteCookie
}