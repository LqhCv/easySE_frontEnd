/*
 * @Author: hcy
 * @Date: 2022-10-04 17:08:52
 * @LastEditors: hcy
 * @LastEditTime: 2022-10-31 16:58:42
 * @FilePath: \src\config\config.prod.ts
 * @Description: prod环境变量
 *
 */

import { defineConfig } from 'umi';
import routes from './routes';
import theme from './theme';
import proxy from './proxy';

export default defineConfig({
  define: {
    // 重点就是这个属性了，设置全局变量
    // 在项目中，可以通过process.env.NODE_ENV 或者
    // process.env.UMI_ENV 或者process.env.date得到对应环境的值
    'process.env': {
      NODE_ENV: 'prod',
      UMI_ENV: 'prod',
      date: '2022-08-01',
    },
  },
  nodeModulesTransform: {
    // node_modules依赖加载
    type: 'none', // 跳过一些module all 加载慢
  },
  routes, // 路由
  fastRefresh: {}, // 快速编译，保持组件状态
  devServer: {
    port: 8000, // .env里面权限更高
  },
  title: '软件工程辅助平台', // 标题
  // favicon:'/',//图标
  dynamicImport: {
    loading: '@/components/Loading', // 按需加载指定的加载组件
  },
  mountElementId: 'app', // document问价id名
  theme,
});
