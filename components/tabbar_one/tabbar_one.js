// components/custom_tabbar/tabbar_one.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tid:{
      type:Number,
      value:2
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    userinfo:{},
    tabs:[
      {
        id:0,
        name:"首页",
        isActive:true,
        img: "../../icons/version_2/tabbar/home.png",
        act_img: "../../icons/version_2/tabbar/home_fill.png",
        open_type:null,
        bindtap:"goto_index"
      },
      {
        id: 1,
        name: "订单",
        isActive: false,
        img: "../../icons/version_2/tabbar/order.png",
        act_img: "../../icons/version_2/tabbar/order_fill.png",
        open_type:null,
        bindtap:"goto_order"
      },
      {
        id: 2,
        name: "客服",
        isActive: false,
        img: "../../icons/version_2/tabbar/contact.png",
        act_img: "../../icons/version_2/tabbar/contact_fill.png",
        open_type:"contact",
        bindtap:null
      },
      {
        id: 3,
        name: "我的",
        isActive: false,
        img: "../../icons/version_2/tabbar/mine.png",
        act_img: "../../icons/version_2/tabbar/mine_fill.png",
        open_type:null,
        bindtap:"goto_mine"
      }
    ]
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      const userinfo = wx.getStorageSync("userinfo");
      this.setData({
        userinfo
      })
      let {tabs,tid}=this.data
      tabs.forEach((v,i)=>v.isActive=(v.id==tid))
      this.setData({
        tabs
      })
    }
    // detached: function() {
    //   // 在组件实例被从页面节点树移除时执行
    // },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    goto_index: function () {
      if(this.data.tid!=0){
        wx.redirectTo({
          url: '/pages/car/index'
        })
      }
    },
    goto_mine(){
      if(this.data.tid!=3){
        wx.redirectTo({
          url: '/pages/car/mine/index'
        })
      }
    },
    goto_order(){
      // console.log(this.data);
      let {tid}=this.data;
      if(tid!=1){
        if (this.data.userinfo) {
          wx.redirectTo({
            url: '/pages/car/order/order',
          })
        }
        else {
          wx.showModal({
            content: '请先进行登录',
            showCancel: false,
            success:function(){
              if(tid!=3){
                wx.redirectTo({
                  url: '/pages/car/mine/index',
                })
              }
            }
          })
        }
      }
    },
    // handleTab(e){
    //   let tab_index= e.currentTarget.dataset.index;
    //   let {tabs}=this.data
    //   console.log(tab_index);
    //   this.data.tabs.forEach((v,i)=>v.isActive=(v.id==tab_index))
    //   console.log(this.data.tabs);
    //   this.setData({
    //     tabs
    //   })
    // }
  }

})
