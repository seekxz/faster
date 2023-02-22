

## 服务器合理设置缓存策略

服务器配置为返回`Cache-Control` HTTP 响应头，指定缓存资源的最长时间，可以根据资源更改的频率调整。对于经常变化的资源，持续时间越短越好，而对于不经常变化的资源，则相反。

使用高效的缓存策略可以通过将文本本地存储在用户浏览器中缩短页面加载时间并减少带宽消耗。这样可以减少服务器的负载，提高网站的性能。

如果静态文件没有更改或者有适当的缓存清除策略，那么缓存时间可以设置为 6 个月或者 1 年。如果更改不频繁，可以使用较低的缓存过期时间，只要在 3 个月以上即可。

## 通过 <meta> 标签设置缓存策略

```html
<meta http-equiv="Cache-Control" content="max-age=3600">
<meta http-equiv="Expires" content="Tue, 01 Jan 2019 00:00:00 GMT">
```

## 在代码中设置缓存策略

golang 通过设置 `Cache-Control` HTTP 响应头来设置缓存策略。

```go
func main() {
  http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Cache-Control", "max-age=3600")
    w.Write([]byte("Hello, world!"))
  })
  http.ListenAndServe(":8080", nil)
}
```

## 通过 nginx 设置缓存策略

nginx 通过设置 `proxy_cache_valid` 指令来设置缓存策略。

```nginx
server {
  listen 80;
  server_name example.com;
  location / {
    proxy_pass http://localhost:8080;
    proxy_cache_valid 200 1h;
  }
}
```
