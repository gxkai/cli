## Usage

```
npm install micro-structure-cli --save-dev

micro init
```

## Config

初始化时要求 config 的绝对路径地址必填，config 格式为：

```js
window._MICRO_APP_CONFIG = {
  devMenu: [
    {
      id: 'index',
      name: '首页',
      path: '/',
      urlPath: '/app.js',
      origin: 'http://localhost:8080'
    },
    {
      id: 'about',
      name: '关于',
      path: '/about',
      urlPath: '/app.js',
      origin: 'http://localhost:8083'
    }
  ],
  normalMenu: [
    {
      id: 'index',
      name: '首页',
      path: '/',
      urlPath: '/app.js',
      origin: 'http://localhost:8080'
    },
    {
      id: 'about',
      name: '关于',
      path: '/about',
      urlPath: '/app.js',
      origin: 'http://localhost:8083'
    }
  ]
}
```
