const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    devServer:{
      host:"localhost",
      port:8080,
      proxy:{
        "/api":{
          target:"http://localhost:7001",
          changeOrigin:true,
          pathRewrite:true
        }
      }
  }
  }
 
});
