import { routes } from './routes'; //路由
import proxy from './proxy'; //代理

export default {
  routes,
  proxy,
  // 可以抽离的最佳实践配置 start
  title: '装修报价系统',
  targets: {
    ie: 11,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  cssModulesTypescriptLoader: {},
  cssLoader: {
    localsConvention: 'camelCase',
  },
  hash: true,
  terserOptions: {
    compress: {
      drop_console: true,
      drop_debugger: true,
      pure_funcs: ['console.log'], // 移除console
    },
  },
  fastRefresh: {},
  dynamicImport: {},
  //   webpack配置
  chainWebpack: function (config: any, { webpack }: any) {
    config.merge({
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 3,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test({ resource }: any) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,
            },
          },
        },
      },
    });
  },
};
