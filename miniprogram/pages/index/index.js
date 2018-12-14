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

  /** 将电费账号复制到剪切板 */
  bindCopy: function(e) {
    wx.setClipboardData({
      data: e.target.dataset.code,
      success (res) {
        wx.showToast({
          title: '电费账号已复制',
          icon: 'none'
        })
        setTimeout(() => (
          wx.hideToast()
        ), 1500)
      }
    })
  },

  /** 将电费账号从存储中删除*/
  bindDel: function(e) {
    let that = this,
        { codes } = this.data,
        code_id = e.target.dataset.id,
        code = codes.filter((c) => c.id === code_id)[0]

    wx.showModal({
      title: '删除电费账号',
      content: `${code.addr}(${code.chargeCode})`,
      confirmColor: '#45A8F4',
      success (res) {
        if(res.cancel) return;
        let result = delCodeInStor(code_id)
        if(Array.isArray(result)) {
          // 删除成功，展示新的电费账号列表
          that.setData({
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
      }
    })

    
  },

  /** 查询电费网址提示 */
  onQueryBanlance () {
    wx.showModal({
      title: 'http://10.168.55.50:8088',
      content: '请在校园网环境下访问, 默认密码为123456或6个0.',
      cancelText: '知道了',
      confirmText: '复制网址',
      confirmColor: '#45A8F4',
      success (res) {
        if (!res.confirm) {
          return;
        }
        wx.setClipboardData({
          data: 'http://10.168.55.50:8088',
          success (res) {
            wx.showToast({
              title: '网址已复制',
              icon: 'none'
            })
            setTimeout(() => (
              wx.hideToast()
            ), 1500)
          }
        })
      }
    });
  }

})
