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

  /** 将开源仓库地址复制到剪切板 */
  bindCopy: function(e) {
    wx.setClipboardData({
      data: 'https://github.com/hoooxz/xd-charge',
      success (res) {
        wx.showToast({
          title: '开源仓库地址已复制',
          icon: 'none'
        })
        setTimeout(() => (
          wx.hideToast()
        ), 1500)
      }
    })
  },

})