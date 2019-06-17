let pinyin_to_word = require('./base.js')
module.exports =  class SortWord{
  constructor(list, name) {
    this.newList = []
    this.change(list, name)
  }
  change(list, name){
    list.forEach((item, index) => {
      let hasWord = 0
      for(let key in pinyin_to_word) {
        if(pinyin_to_word[key].match(item[name].slice(0, 1))){
          if (this.newList.length === 0) {
            this.newList.push({
              title: key,
              list: [item]
            })
            break
          } else {
            if(!this.sameKey(this.newList, key)) {
              this.newList.push({
                title: key,
                list: [item]
              })
              break
            } else {
              this.newList.forEach(val => {
                if(val.title === key) {
                  val.list.push(item)
                }
              })
              break
            }
          }
        } else {
          hasWord++
        }
        if(hasWord === 26) {
          let hasOther = 0
          this.newList.forEach(val => {
            if(val.title === '#') {
              hasOther = 1
            }
          })
          if(hasOther === 0) {
            this.newList.push({
                title: '#',
                list: [item]
              })
          } else {
            this.newList.forEach(val => {
              if(val.title === '#') {
                val.list.push(item)
              }
            })
          }
        }
      }
    })
    let len = this.newList.length
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (this.newList[j].title.charCodeAt(0) > this.newList[j + 1].title.charCodeAt(0)) {
          [this.newList[j], this.newList[j + 1]] = [this.newList[j + 1], this.newList[j]]
        }
      }
    }
    if(this.newList[0].title === '#'){
      let other = this.newList[0]
      this.newList.shift()
      this.newList.push(other)
    }
  }
  sameKey (arr, val) {
    let state = false
    arr.forEach(item => {
      if (item.title === val) {
        state = true
      }
    })
    return state
  }
}