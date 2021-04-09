// pages/car/mine/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: {},
    // 被收藏的商品的数量
    collectNums: 0
  },
  onShow() {
    const userinfo = wx.getStorageSync("userinfo");
    const collect = wx.getStorageSync("collect") || [];

    this.setData({ userinfo, collectNums: collect.length });

  },

  handleGetUserInfo(e) {
    console.log(e)
    const {encryptedData,rawData,iv,signature,userInfo} = e.detail;
    // console.log(encryptedData);
    // console.log(rawData);
    // console.log(iv);
    // console.log(signature);
    wx.login({
      timeout: 10000,
      success:(result)=>{
        const {code}=result;
        console.log(code);
      }
    })
    wx.setStorageSync("userinfo", userInfo);
    wx.redirectTo({
      url: 'index',
    })
  },
  handleExit(){
    wx.showModal({
      content: '您确定要退出登录吗',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          // console.log('用户点击确定')
          wx.setStorageSync('userinfo', '');//将token置空
          wx.redirectTo({
            url: '/pages/car/mine/index',//跳去登录页
          })
        } else {//这里是点击了取消以后
          console.log('用户点击取消')
        }
      }
    })
  },
  // goto_order() {
  //   if (this.data.userinfo) {
  //     wx.redirectTo({
  //       url: '../order/order',
  //     })
  //   }
  //   else {
  //     wx.showModal({
  //       content: '请先进行登录',
  //       showCancel: false
  //     })
  //   }

  // },
  // goto_index() {
  //   wx.redirectTo({
  //     url: '../index'
  //   })
  // },
  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  }
})