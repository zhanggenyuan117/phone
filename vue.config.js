let path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
};
let IS_PRODUCTION = process.env.NODE_ENV === 'production';
module.exports = {
    publicPath: './',
    lintOnSave: false,
    filenameHashing: false,
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            title: 'Demo',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        }
    },
    productionSourceMap: !IS_PRODUCTION,
    configureWebpack: (config) => {
      if (IS_PRODUCTION) {
        //为生产环境进行配置 如：去除console.log ,debugger
        config.optimization.minimizer.map((arg) => {
          const option = arg.options.terserOptions.compress;
          option.drop_console = true; // 打开开关
          return arg;
        });
      } else {
        //为开发环境进行配置
      }
    },
    chainWebpack: config => {
      //设置别名  路径优化，但是若要引用static文件夹下文件，则要用一般设置
      config.resolve.alias
        .set("@", resolve("src"))
        .set("@assets", resolve("src/assets"))
        .set("@components", resolve("src/components"))
        .set("@store", resolve("src/store"))
        .set("@pages", resolve("src/pages"))
        .set("@utils", resolve("src/utils"))
    },
    devServer: {
        // port: 8080,
        // proxy: {
        //   '/api-admin': {
        //     target: '', // 代理接口
        //     changeOrigin: true,
        //     pathRewrite:{
        //       '^/api': ''
        //     }
        //     // pathRewrite: {
        //     //     '^/api': '/mock' // 代理的路径
        //     // }
        //   }
        // },
        before: function (app) {
          app.use(require('./server/mockServer'));
        },
        overlay: {
          warning: false,
          error: true
        }
    }
}
