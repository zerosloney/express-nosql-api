# express-nosql-api

## 内容服务器端

1. 结构：express+mongodb+couchbase
2. 说明: mongodb做token数据库 ，couchbase做为缓存，express做API展现
3. 启动：node app.js
4. 备注：使用Jwt验证请求头部x-access-token信息

## Token服务器
1. 结构：express+mongodb+couchbase
2. 说明: mongodb做token数据库 ，couchbase做为缓存，express做API展现
3. 启动：node token.js
4. 备注：使用Jwt生成token
