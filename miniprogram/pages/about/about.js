// miniprogram/pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onShareAppMessage: function () {
    return {
      title: '查询西电电费账号'
    }
  },

  navToQuery () {
    wx.navigateTo({
      url: '../query/query'
    })
  },

})