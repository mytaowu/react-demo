const { createProxyMiddleware }  = require ('http-proxy-middleware')

// 配置代理
module.exports = function (app) {
  app.use(
    '/get/user',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true
    })
  )
}