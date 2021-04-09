
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    // order_id: 0,
    random_id:0,
    new_order:{},
    order_content: [
      // {
      //   order_id: 0,
      //   type: "接机",
      //   status: "待出发",
      //   time: "2021-11-24 14:20",
      //   price: 40,
      //   add_from: "43 Herschel St, Erneste City, QLD 4000, AU",
      //   add_to: "47 asdasfal St, Brisbane asdqwdas, QLD 4000, AUBrisbane asdqwdas, QLD 4000"
      // }
    ]
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
    
    let order_content = this.data.order_content;
    // console.log(order_content.length)
    const form_detail = wx.getStorageSync("form_detail");
    // const order_type = wx.getStorageSync("order_type");
    // console.log(form_detail)
    if (form_detail) {
      let new_order = {
        order_id: this.data.random_id,
        type: form_detail.order_type,
        status: "待出发",
        time: form_detail.date + ' ' + form_detail.time,
        contact: form_detail.contact,
        people_number: form_detail.people_number,
        luggage: form_detail.luggage,
        price: 40,
        add_from: form_detail.departure,
        add_to: form_detail.destination,
        add: form_detail.add
      }
      order_content.push(new_order);
      this.setData({
        // order_content
        new_order
      })
    }

    // console.log(this.data.order_content);
    // console.log(this.data.new_order);
  },
  handlePay(){
    let random_id = this.createRandom();
    this.data.new_order.order_id=random_id;
    console.log(this.data.new_order);
    wx.setStorageSync("new_order", this.data.new_order);
    wx.navigateBack({
      delta:2
    });
    wx.navigateTo({
      url: '../order/order',
    })
  },
  createRandom(){
    //自定义订单编号生成规则   由YYYYMMDD(年月日) + 六位随机数
    let currDate = new Date();
    let year = currDate.getFullYear();
    let month = currDate.getMonth() + 1 < 10 ? "0" + (currDate.getMonth() + 1) : currDate.getMonth() + 1;
    let day = currDate.getDate() < 10 ? "0" + currDate.getDate() : currDate.getDate();

    //获取年月日
    let date = year +'' +month + ''+day; //20190524
    let num = parseInt((Math.random() * 9 + 1) * 100000);
    let orderCode = 'BC'+date+num
    console.log(orderCode)
    return orderCode;
  }

})