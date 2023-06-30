const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      host: "localhost",
      port: 8080,
      proxy: {
        "/dev": {
          target: "http://localhost:7001",
          changeOrigin: true,
          pathRewrite: {
            "^/dev": "",
          },
        },
      },
    },
  },
});
