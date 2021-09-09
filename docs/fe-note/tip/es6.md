# ES6 Tip

## let const var 有什么区别
1. 变量提升,let,const 不能,var 可以;
2. const 一旦声明，实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动；
3. let const 不允许重复声明；
4. 暂时性死区，like this：(只要快作用域内有let命令，它所声明的变量就绑定这个区域了，不再受外部影响)
```javascript
var temp = 123;
if(true){
    temp='909';//ReferenceError
    console.log(temp);//ReferenceError
    let temp;
}
```
5. 块级作用域
```javascript
var temp = 10;
function test(){
    console.log(temp);
    if(true){
        var temp = 20;
    }
}
test()// undefined
```
## 声明变量的六种方式
let const var function import class