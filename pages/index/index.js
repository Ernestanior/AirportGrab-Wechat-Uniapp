//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
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
