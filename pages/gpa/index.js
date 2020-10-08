// pages/gpa/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num_1: 0,
    num_2: 0,
    num_3: 0
  },
  
  input_1(e){
    this.setData({
      num_1: parseInt(e.detail.value)
    }) 
  },
  input_2(e) {
    this.setData({
      num_2: parseInt(e.detail.value)
    })
  },
  input_3(e) {
    this.setData({
      num_3: parseInt(e.detail.value)
    })
  },
  
  //转发
  onShareAppMessage: function () {
    let users = wx.getStorageSync('user');
    return {
      title: '转发',
      path: '/pages/index/index'
    }
  }
})