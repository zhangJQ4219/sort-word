## sort-word

```
  npm install sort-word -S
```
## use

``` 
  import SortWord from 'sort-word'

  第三参数为true时 添加**热门**项，默认添加传入数组前10个
  不需要**热门**项，则不需要传第三个参数
  
  let newList = new SortWord(list, value, true)