Webpack Config "libraryTarget" "commonjs2" Demo
======================================

跟libraryTarget为`commonjs`时相比，区别在于：

1. commonjs: webpack把收集到的exports一个个复制到全局的`exports`上
2. commonjs2: webpack把收集到的exports直接赋值给`module.exports`

看起来两者的区别就是前者多了一个copy，后者是共用同一个对象。具体为什么会这样，还没研究。

```
npm install
npm run demo
```

