<<<<<<< HEAD
export default {
  '/api': {
    //要代理的真实服务器地址
    target: '',
    //配置了这个可以从 http 代理到 https
    https: true,
    //依赖origin 的功能可能需要这个，比如 cookie
    changeOrigin: true,
    pathRewrite: { '^/api': '' }, //路径替换
=======
/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
export default {
  dev: {
    '/api/': {
      target: 'http://localhost:3009',
      // 配置了这个可以从 http 代理到 https
      // 依赖 origin 的功能可能需要这个，比如 cookie
      changeOrigin: true,
    },
  },
  prod: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
>>>>>>> 8fefb8d141306e349e273ce11f46174e97a73e0d
  },
};