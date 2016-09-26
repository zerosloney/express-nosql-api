# 这是一个用express框架做api的demo

## 内容服务器端

1. 结构：express+mongodb+couchbase
2. 说明: mongodb做内容数据库 ，couchbase做缓存连接池，express做内容API展现
3. 启动：pm2 node app.js -i 2 --name co-api（需安装pm2 ）
4. 备注：使用Jwt验证请求头部x-access-token信息

## Token服务器
1. 结构：express+mongodb+couchbase
2. 说明: mongodb做内容数据库 ，couchbase做缓存连接池，express做TokenAPI发放展现
3. 启动：pm2 node token.js -i 2 --name token-api（需安装pm2 ）
4. 备注：使用Jwt生成token

## 业务拆分
1. 根据业务拆分成一个个微服务
2. 待续.......
