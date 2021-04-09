// components/order_tab/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:""
    },
    order_content:{
      type:Array,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemtap:function(e){
      //2. 获取索引
      const {index} = e.currentTarget.dataset;
      //触发父组件的自定义事件，把索引传给父组件
      this.triggerEvent("itemChange",{index});
      // console.log(index);
      //3. 获取数组
      //这里titles只是复制地址，并没有重新复制整个值
      // let {titles}=this.data;
      // let titles = JSON.parse(JSON.stringify(this.data.titles))
      // console.log(titles);
      //4. 遍历数组
      // [].forEach 遍历数组
      
      // titles.forEach(function(v, i){
      //   console.log(v);
      //   console.log(i);
      //  if(i===index){
      //    v.isActive = true
      //  }else{
      //    v.isActive = false
      //  }
      // })
      // titles.forEach((v, i) => v.isActive =(i === index));
      // this.setData({
      //   titles
      // })
    }
  }
})
