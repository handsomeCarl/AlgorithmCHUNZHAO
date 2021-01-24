
学习笔记
# 优先级队列在 Javascript 中的实现

### 1.队列基于 FIFO (先进先出)原则工作。因此，它执行两个基本操作，即在队列末尾添加元素和从队列前端删除元素。与堆栈一样，队列也是线性数据结构。
### 2优先级队列是队列的一个扩展，具有以下属性:

* 优先级队列的每个元素都有一个与之关联的属性
* 元素按照优先级添加到队列中
* 最低优先级的元素首先被删除
* 时间复杂度 插入O1 取出 nlogn

### 3.优先队列的实现方法
* 在第一种情况下，我们可以在队列的末尾添加队列元素，并根据优先级去掉队列的元素
* 在第二种情况下，我们可以根据优先级向队列添加元素，并从队列的前面移除它们

```
//两个属性元素和优先级
class QElement { 
    constructor(element,priority) 
    { 
        this.element = element; 
        this.priority = priority; 
    } 
} 

// PriorityQueue class  使用了一个数组来实现优先级队列，这个数组是 QElement 的容器。

class PriorityQueue { 
  
    // An array is used implement priority 
    constructor(){ 
      this.items = []; 
    } 
  
    // functions to be implemented 
    // enqueue(item, priority) 
    // dequeue() 
    // front() 
    // isEmpty() 
    // printPQueue() 
} 
```
```
//根据队列的优先级向其添加元素
enqueue(element, priority) 
{ 
    // 创建一个队列的类
    let qElement = new QElement(element,priority); 
    let contain = false; 
  
    for (var i = 0; i < this.items.length; i++) { 
      //比较优先级
        if (this.items[i].priority > qElement.priority) { 
      
            // enqueued 
            this.items.splice(i, 0, qElement); 
            contain = true; 
            break; 
        } 
    } 
  
   // <!-- 如果有最高优先级直接添加  -->
    if (!contain) { 
        this.items.push(qElement); 
    } 
} 
```
```
<!-- 删除元素  从队列的前面移除一个元素-->
dequeue() 
{ 
     
    if (this.isEmpty()) 
        return "null"; 
    return this.items.shift(); 
} 
```
```
// 返回队列最前边元素
front() 
{ 
   
    if (this.isEmpty()) 
        return "No elements in Queue"; 
    return this.items[0]; 
} 
```
```
//返回优先级队列的最后一个元素

rear() 
{ 

    if (this.isEmpty()) 
        return "No elements in Queue"; 
    return this.items[this.items.length - 1]; 
} 
```