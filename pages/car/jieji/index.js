Page({

  /**
   * 页面的初始数据
   */
  onLoad: function (options) {
    // this.initValidate();
    this.setData({
      currentTab:options.current
    })
  },

  data: {
    airport_array: ['BNE Domestic Airport', 'BNE International Airport'],
    people_array: [1,2,3,4,5,6,7,8],
    luggage_array: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    type: '接机',
    form_one:{
      departure: '出发机场',
      destination:'',
      date:'请选择日期',
      time:'请选择时间',
      people_number:'请选择人数',
      luggage:'请选择行李件数',
      contact:''
    },
    form_two: {
      departure: '',
      destination: '目的机场',
      date: '请选择日期',
      time: '请选择时间',
      people_number: '请选择人数',
      luggage: '请选择行李件数',
      contact: ''
    },
    
    airport_index:0,
    currentTab: 0,
  },

  formSubmit: function (e) {
    //校验表单
    if(this.data.type==="接机"){
      if (e.detail.value.departure === "出发机场") {
        const error = {
          msg: '请选择机场'
        }
        this.showModal(error)
        return false
      }
      else if (e.detail.value.destination === "") {
        const error = {
          msg: '请填写地址'
        }
        this.showModal(error)
        return false
      }
    }else{
      if (e.detail.value.departure === "") {
        const error = {
          msg: '请填写地址'
        }
        this.showModal(error)
        return false
      }
      else if (e.detail.value.destination === "目的机场") {
        const error = {
          msg: '请选择机场'
        }
        this.showModal(error)
        return false
      }
    }

    if (e.detail.value.date === "请选择日期") {
      const error = {
        msg: '请选择日期'
      }
      this.showModal(error)
      return false
    }
    else if (e.detail.value.time === "请选择时间") {
      const error = {
        msg: '请选择时间'
      }
      this.showModal(error)
      return false
    }
    else if (e.detail.value.people_number === "请选择人数") {
      const error = {
        msg: '请选择人数'
      }
      this.showModal(error)
      return false
    }
    else if (e.detail.value.luggage === "请选择行李件数") {
      const error = {
        msg: '请选择行李件数'
      }
      this.showModal(error)
      return false
    }
    else if (e.detail.value.contact === "") {
      const error = {
        msg: '请填写联系方式'
      }
      this.showModal(error)
      return false
    }
    //向后台发送时数据 wx.request...
    




    // console.log(e.detail);
    // console.log(e.detail.value);
    const form_detail=e.detail.value;
    const order_type = this.data.type;
    console.log(form_detail);
    form_detail.order_type=this.data.type;
    wx.setStorageSync("form_detail", form_detail);
    // wx.setStorageSync("order_type", order_type);
    // wx.showToast({
    //   title: '成功创建订单',
    // })
    wx.navigateTo({
      url: '../confirm_order/index',
    })
    // this.showModal({
    //   msg: '提交成功',
    //   showCancel: false,
    //   success: function () {
    //     wx.redirectTo({
    //       url: '../order/order'
    //     })
    //   }
    // });
  },
  /***报错 **/
  showModal(error) {
    wx.showModal({
      content: error.msg,
      showCancel:false
    })
  },
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  bindAirportChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    if(this.data.type==='接机'){
      this.setData({
        'form_one.departure': this.data.airport_array[e.detail.value]
      })
    }
    else{
      this.setData({
        'form_two.destination': this.data.airport_array[e.detail.value]
      })
    }

  },
  bindPeopleChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    if (this.data.type === '接机') {
      this.setData({
        'form_one.people_number': this.data.people_array[e.detail.value]
      })
    }else{
      this.setData({
        'form_two.people_number': this.data.people_array[e.detail.value]
      })
    }

  },
  bindLuggageChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    if (this.data.type === '接机') {
      this.setData({
        'form_one.luggage': this.data.luggage_array[e.detail.value]
      })
    } else {
      this.setData({
        'form_two.luggage': this.data.luggage_array[e.detail.value]
      })
    }

  },
  bindTabChange: function (e) {
    var that = this;
    this.data.type=e.detail.current===0?'接机':'送机';
    // console.log(this.data.type);
    that.setData({
      currentTab: e.detail.current
      });
    
  },

  bindDateChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    if (this.data.type === '接机') {
      this.setData({
        'form_one.date': e.detail.value
      })
    }else{
      this.setData({
        'form_two.date': e.detail.value
      })
    }

    // console.log(this.data.form)
  },

  bindTimeChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    if (this.data.type === '接机') {
      this.setData({
        'form_one.time': e.detail.value
      })
    } else {
      this.setData({
        'form_two.time': e.detail.value
      })
    }

    // console.log(this.data.form)
  },

  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  }
  
})