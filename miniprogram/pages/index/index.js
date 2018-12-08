//index.js
const app = getApp()

import {
  getCodesFromStor,
  delCodeInStor
} from '../../utils/chargeCode';

Page({
  data: {
    codes: []
  },

  onLoad: function() {
    
  },

  onShow: function () {
    this.setData({
      codes: getCodesFromStor().sort((a, b) => a.id < b.id)
    })
  },

  navToQuery () {
    wx.navigateTo({
      url: '../query/query'
    })
  },

  /** 将用电账号复制到剪切板 */
  bindCopy: function(e) {
    wx.setClipboardData({
      data: e.target.dataset.code,
      success (res) {
        wx.showToast({
          title: '用电账号已复制',
          icon: 'none'
        })
        setTimeout(() => (
          wx.hideToast()
        ), 1500)
      }
    })
  },

  /** 将用电账号从存储中删除*/
  bindDel: function(e) {
    let result = delCodeInStor(e.target.dataset.id)
    if(Array.isArray(result)) {
      // 删除成功，展示新的用电账号列表
      this.setData({
        codes: result.sort((a, b) => a.id < b.id)
      })
    } else {
      wx.showToast({
        title: '删除失败，请重试',
        icon: 'none'
      })
      setTimeout(() => (
        wx.hideToast()
      ), 1500)
    }
  },

})
