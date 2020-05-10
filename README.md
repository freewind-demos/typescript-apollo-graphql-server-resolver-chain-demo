TypeScript Apollo GraphQL Server Resolver Chain Demo
===========================

嵌套的Resolver从上到下计算数据时，下面的resolver可以通过`parent`拿到上一个resolver生成的父节点数据

```
npm install
npm run demo
```

在打开的playground中左边填写：

```
query {
  libraries {
    books {
      title
      author {
        name
      }
    }
  }
}
```

