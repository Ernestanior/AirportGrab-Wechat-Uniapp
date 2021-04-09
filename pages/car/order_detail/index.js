// pages/car/order_detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    new_order:{}
    // order_id:1,
    // order_content:[
      // {
      //   order_id: 0,
      //   type: "接机",
      //   status: "待出发",
      //   time: "2021-11-24 14:20",
      //   price: 40,
      //   add_from: "43 Herschel St, Erneste City, QLD 4000, AU",
      //   add_to: "47 asdasfal St, Brisbane asdqwdas, QLD 4000, AUBrisbane asdqwdas, QLD 4000"
      // }
    // ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const { order_id } = options;
    const userinfo = wx.getStorageSync("userinfo");
    this.setData({
      username: userinfo.nickName,
      // order_id: order_id
    })
    
    // console.log(order_id);
    
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let order_content = this.data.order_content;
    // console.log(order_content.length)
    const form_detail = wx.getStorageSync("new_order");
    // const order_type = wx.getStorageSync("order_type");
    // console.log(form_detail)
    if(form_detail){
      let new_order = {
        order_id: form_detail.order_id,
        type: form_detail.type,
        status: form_detail.status,
        time: form_detail.time,
        contact: form_detail.contact,
        people_number: form_detail.people_number,
        luggage: form_detail.luggage,
        price: form_detail.price,
        add_from: form_detail.add_from,
        add_to: form_detail.add_to,
        add: form_detail.add
      }
      // order_content.push(new_order);
      this.setData({
        new_order
      })
    }

    // console.log(this.data.order_content);
    // console.log(this.data.new_order);
  },

  
})