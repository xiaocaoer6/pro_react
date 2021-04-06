
const path = require('path')
const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack:{
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      pages: path.resolve(__dirname, 'src/pages')
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};