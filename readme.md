## sort-word

```
  npm install sort-word -S
```
## use

  第三参数为true时 添加热门项，默认添加传入数组前10个
  不需要热门项，则不需要传第三个参数

``` 
  import SortWord from 'sort-word'

  let newList = new SortWord(list, value, true)

  例如：

  let arr = [{name: '张三'}, {name: '李四'}]
  let newArr = new SortWord(arr, 'name')

  newArr {
    newList:[
      {title: 'L', list: [{name: '李'}]},
      {title: 'Z', list: [{name: '张'}]}
    ],
    indexList: ['L', 'Z'],
    total: 2
  }

```