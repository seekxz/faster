
## gzip

原因：能够减小文件体积，传输速度更快。 

怎么做：
1. webpack 通过插件 `compression-webpack-plugin` 进行配置, vite 通过插件 `vite-plugin-compression` 进行配置 
2. nginx 配置，一般 `location` 段进行 gzip 开启
```
server {
  gzip on;
  gzip_buffers 4 16k;
  gzip_comp_level 6;
  gzip_type text/plain application/javascript text/css application/xml text/javascript application/x-httpd-php;
}
```
3. 客户端 gzip 离线包通过 Service Worker 缓存静态资源，生成离线包，通过 `sw-precache-webpack-plugin` 插件进行配置。另外，离线包的大小需要小于 2M，否则不合适，离线包的加载优先级高于网络请求。
