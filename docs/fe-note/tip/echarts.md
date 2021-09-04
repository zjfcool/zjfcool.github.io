# echarts 折线图抖动问题

在动态添加数据绘制折线图的时候发现有跳跃抖动；
解决方法：data数据结构添加name属性
```typescript
{
    data:[
        {
            name:"",
            value:''
        }
    ]
}
``