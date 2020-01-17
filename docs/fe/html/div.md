### 理解 ES6 — reduce/map/forEach
#### 前言
不废话，直接上正题。

##### 1 forEach  (让数组中的每一项都做一件事)
如果不做特殊处理，一般情况下，不会break的。如果需要中途跳出循环，建议直接用for语句好了。
```js
let arr = [1,2,3,4,5];
arr.forEach((item,index)=> {
    console.log(item);
})
// 1,2,3,4,5
```
![forEach](http://upload-images.jianshu.io/upload_images/3801068-5b171b525726486d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 2 map  (让数组通过某种计算产生一个新数组)
```js
let arr = [1,2,3,4,5];
let newArray = arr.map((item,index)=> {
    return item * 2
});
newArray  // [2, 4, 6, 8, 10]
arr // [1,2,3,4,5]
```
这里返回的是一个新的数组，并不会改变原来数组。

![map](http://upload-images.jianshu.io/upload_images/3801068-24a2e9d5c9014012.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 3 reduce  (让数组中的前项和后项做某种计算，并累计最终值)
```js
let arr = [1,2,3,4,5];
let result = arr.reduce((prev, cur, index, arr)=> {
    return prev + cur;
});
```
callbackFunction 包含4个参数，先解释下它们的意思：
>prev：第一项的值或者上一次叠加的结果值
cur: 当前会参与叠加的项
index: 当前索引
arr： 数组本身

此时，初始值默认为数组的 [0],如果想自定义初始值，那可以给reduce添加第二个参数(initialValue)，如下
```js
let result = arr.reduce((prev, cur, index, arr)=> {
    return prev + cur;
}, -5);
// 如果是累加，一定要注意 initialValue 的类型，如果设置成了字符串，根据 “两者相加，值类型与第一个加数相同”，那么结果就是一个字符串。
```

![reduce](http://upload-images.jianshu.io/upload_images/3801068-ccc8e681931b05b0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


##### 4 filter  (筛选处数组中符合条件的项，返回一个新数组)
```js
let arr = [1,2,3,4,5];
let newArray = arr.filter((item,index)=> {
    return item > 3;
});
 newArray // [4,5]
```
![filter](http://upload-images.jianshu.io/upload_images/3801068-3f0fdacbb8c5d910.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 5 every  (检测数组中的每一项是否符合条件)
可以理解成 && '且'的关系
```js
let arr = [1,2,3,4,5];
let result = arr.every((item,index)=> {
    return item > 0;
});
 result  // true
```

##### 6 some  (检测数组是否有某些项目符合条件)
可以理解成 || '或'的关系
```js
let arr = [1,2,3,4,5];
let result = arr.some((item,index)=> {
    return item > 2;
});
 result  // false
```
