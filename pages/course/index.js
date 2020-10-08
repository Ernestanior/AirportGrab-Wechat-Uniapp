Page({
  data: {
    content: [],
    px: [],
    pxopen: false,
    pxshow: false,
    active: true,
    imgUrl: "../../icons/down.png"
  },
  onLoad: function () {
    this.setData({
      // px: ['ae', 'ma','ac','bs','bm','ec','bl','it','ph','ch','re']
      px: [['ae','Academic English (AE)'], ['ma','Mathematics (MA)'],['ac','Accounting (AC)'],['bs','Behaviour Science (BS)'],['bm','Busniness Management (BM)'],['ec','Economics (EC)'],['bl','Biology (BL)'],['it','Information Technology (IT)'],['ph','Physics (PH)'],['ch','Chemistry (CH)'],['re','Research (RE)']]
    })
  },
  listpx: function (e) {
    console.log(e)
    if (this.data.pxopen) {
      this.setData({
        pxopen: false,
        pxshow: false,
        active: true,
        imgUrl: "../../icons/down.png"
      })
    } else {
      
      this.setData({
        content: this.data.px,
        pxopen: true,
        pxshow: false,
        active: false,
        imgUrl: "../../icons/up.png"
      })
      console.log(this.data.content);
    }
    console.log(e.target)
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