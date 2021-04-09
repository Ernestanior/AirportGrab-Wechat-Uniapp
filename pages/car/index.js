// pages/car/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const userinfo = wx.getStorageSync("userinfo");
    this.setData({
      username: userinfo.nickName,
    })
  },
  // goto_order(){
  //   if(this.data.username){
  //     wx.redirectTo({
  //       url: 'order/order',
  //     })
  //   }
  //   else{
  //     wx.showModal({
  //       content: '请先进行登录',
  //       showCancel: false,
  //       success:function(){
  //         wx.redirectTo({
  //           url: 'mine/index',
  //         })
  //       }
  //     })
  //   }
  // },
  // goto_mine() {
  //   wx.redirectTo({
  //     url: 'mine/index'
  //   })
  // },
  goTo(url) {
    if (this.data.username) {
      wx.navigateTo({
        url: url,
      })
    }
    else {
      wx.showModal({
        content: '请先进行登录',
        showCancel: false,
        success: function () {
          wx.redirectTo({
            url: '/pages/car/mine/index',
          })
        }
      })
    }
  },
  goto_jieji() {
    this.goTo('/pages/car/jieji/index?current=0')
  },
  goto_songji() {
    this.goTo('/pages/car/jieji/index?current=1')
  },
  onPullDownRefresh(){
    wx.stopPullDownRefresh()
  }
})