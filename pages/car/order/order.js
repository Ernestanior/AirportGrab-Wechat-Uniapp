// pages/car/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: [
      {
        id: 0,
        name: "待出发",
        isActive: true
      },
      {
        id: 1,
        name: "历史订单",
        isActive: false
      }
    ],



    order_content: [
      // {
      //   order_id: 0,
      //   type: "接机",
      //   status: "待出发",
      //   time: "2021-11-24 14:20",
      //   price: 40,
      //   add_from: "43 Herschel St, Erneste City, QLD 4000, AU",
      //   add_to: "47 asdasfal St, Brisbane asdqwdas, QLD 4000, AUBrisbane asdqwdas, QLD 4000"
      // },
      // {
      //   order_id: 1,
      //   type: "送机",
      //   status: "待出发",
      //   time: "2021-11-24 14:20",
      //   price: 40,
      //   add_from: "99 Herschel St, Wendy City, QLD 4000, AU",
      //   add_to: "4113 al St, Brisbane akkkkkas, QLD 4000, AU"
      // }
    ],
    order_history: [
      // {
      //   order_id: 0,
      //   type: "接机",
      //   status: "已到达",
      //   time: "2077-03-12 09:15",
      //   price: 40,
      //   add_from: "43 Animals St, New York City, QLD 4444, AU",
      //   add_to: "4117 Cheap St, Brisbane Expensive, QLD 9099"
      // },
      // {
      //   order_id: 1,
      //   type: "接机",
      //   status: "已到达",
      //   time: "2021-11-24 14:20",
      //   price: 40,
      //   add_from: "99 Herschel St, Wendy City, QLD 4000, AU",
      //   add_to: "4113 al St, Brisbane akkkkkas, QLD 4000, AU"
      // }
    ]
  },
  onLoad: function () {
    let order_content = this.data.order_content;
    // console.log(order_content.length)
    // const form_detail = wx.getStorageSync("form_detail");
    // const order_type = wx.getStorageSync("order_type");
    const form_detail = wx.getStorageSync("new_order");
    console.log(form_detail)
    if (form_detail) {
      let new_order = {
        order_id: form_detail.order_id,
        type: form_detail.type,
        status: form_detail.status,
        time: form_detail.time,
        price: form_detail.price,
        add_from: form_detail.add_from,
        add_to: form_detail.add_to
      }
      order_content.push(new_order);
      this.setData({
        order_content
      })
    }
  },
  //接收子组件传递的参数数据
  handleItemChange(e){
    // console.log(e);
    const {index}=e.detail;
    // console.log(index);
    let titles = JSON.parse(JSON.stringify(this.data.titles));
    titles.forEach((v, i) => v.isActive = (i === index));
    this.setData({
      titles
    })
  },
  onPullDownRefresh() {
    // let order_content = this.data.order_content;
    // console.log(order_content.length)
    // const form_detail = wx.getStorageSync("form_detail");
    // const order_type = wx.getStorageSync("order_type");
    // console.log(form_detail)
    // if (form_detail) {
    //   let new_order = {
    //     order_id: order_content.length,
    //     type: order_type,
    //     status: "待出发",
    //     time: form_detail.date + ' ' + form_detail.time,
    //     price: 40,
    //     add_from: form_detail.departure,
    //     add_to: form_detail.destination
    //   }
    //   order_content.push(new_order);
    //   this.setData({
    //     order_content
    //   })
    // }
    wx.stopPullDownRefresh()
  }
  
})