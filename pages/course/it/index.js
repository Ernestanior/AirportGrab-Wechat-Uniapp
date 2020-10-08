Page({

  /**
   * 页面的初始数据
   */

  data: {
    gpa_1: 0,
    score_1: 0,
    score_2: 0,
    score_3: 0,
    score_4: 0,
    score_5: 0,
    score_6: 0,
    score_7: 0,
    x: 0
  },

  score_1(e) {
    let score = e.detail.value;
    score = this.check_score(score, 0, 100);
    this.setData({
      score_1: parseFloat(score)
    })
    if (score === 0) {
      return ""
    }
  },
  score_2(e) {
    let score = e.detail.value;
    score = this.check_score(score, 0, 100);
    this.setData({
      score_2: parseFloat(score)
    })
    if (score === 0) {
      return ""
    }
  },
  score_3(e) {
    let score = e.detail.value;
    score = this.check_score(score, 0, 100);
    this.setData({
      score_3: parseFloat(score)
    })
    if (score === 0) {
      return ""
    }
  },
  score_4(e) {
    let score = e.detail.value;
    score = this.check_score(score, 0, 100);
    this.setData({
      score_4: parseFloat(score)
    })
    if (score === 0) {
      return ""
    }
  },
  score_5(e) {
    let score = e.detail.value;
    score = this.check_score(score, 0, 100);
    this.setData({
      score_5: parseFloat(score)
    })
    if (score === 0) {
      return ""
    }
  },
  score_6(e) {
    let score = e.detail.value;
    score = this.check_score(score, 0, 100);
    this.setData({
      score_6: parseFloat(score)
    })
    if (score === 0) {
      return ""
    }
  },
  score_7(e) {
    let score = e.detail.value;
    score = this.check_score(score, 0, 100);
    this.setData({
      score_7: parseFloat(score)
    })
    if (score === 0) {
      return ""
    }
  },
  gpa_1(e) {
    let gpa = e.detail.value;
    gpa = this.check_score(gpa, 0, 7);
    this.setData({
      gpa_1: parseFloat(gpa)
    })
    if (gpa === 0) {
      return ""
    }
  },
  check_score(score, min, max) {
    let num = 0;
    if (isNaN(score) || parseInt(score) < min || parseInt(score) > max) {
      wx.showToast({
        icon: 'none',
        title: '请输入' + min + '-' + max + '之间的数字',
      })
      num = 0
    } else {
      num = score;
    }
    return num;
  },
  calc_result() {
    //获取用户输入的值
    let gpa_1 = this.data.gpa_1;
    let score_1 = this.data.score_1;
    let score_2 = this.data.score_2;
    let score_3 = this.data.score_3;
    let score_4 = this.data.score_4;
    let score_5 = this.data.score_5;
    let score_6 = this.data.score_6;
    let score_7 = this.data.score_7;

    //gpa转换成百分比
    let gpa = 0;
    if (gpa_1 == 1) { gpa = 1 }
    else if (gpa_1 == 2) { gpa = 25 }
    else if (gpa_1 == 3) { gpa = 47 }
    else if (gpa_1 == 4) { gpa = 50 }
    else if (gpa_1 == 5) { gpa = 65 }
    else if (gpa_1 == 6) { gpa = 75 }
    else if (gpa_1 == 7) { gpa = 85 }

    //计算结果
    let x = 0;
    let total = 0.2 * score_1 + 1.2 * score_2 + 2 * score_3 + 0.8 * score_4 + 0.5 * score_5 + 1.2 * score_6 + 1.6 * score_7
    x = (10 * gpa - total) / 2.5;
    this.setData({
      x
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