module.exports = { _root: '/main', _socket: false, _cors: false, _parser: [], ready, static: '/' }

const { renderFile: render } = require('ejs')
function ready (app) {
  let count = 0

  app.get('/', async (_, res) => {
    const str = await render('./router/main/index.ejs', { count })
    count++
    res.send(str)
  })
}
