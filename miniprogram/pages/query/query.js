// miniprogram/pages/query/query.js

import { 
  getChargeCode, 
  getBuildingsOfCampus,
  isNeedUnit
} from '../../utils/buildings/buildings';

import {
  saveCodeToStor,
  checkCodeValid
} from '../../utils/chargeCode';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    campusNames: ['请选择', '北校区', '南校区'],
    campusIndex: 0,
    buildings: [],
    buildingNames: [],
    buildingIndex: 0,
    needUnit: false,
    unitNames: ['1区/1单元', '2区/2单元', '3区/3单元', '4区/4单元', '5区/5单元'],
    unitIndex: 0,
    room: '',
    chargeCode: '',
    roomStr: '',  /** 门牌号字符串：数据库中检索到的原始门牌号 */
  },

  /** 选中校区 */
  bindCampus: function(e) {
    let campusIndex = parseInt(e.detail.value);
    if(campusIndex === 0) return;
    this.setData({
      campusIndex,
      buildings: [],
      needUnit: false,
      chargeCode: ''
    })
    /** 给出楼栋列表 */
    let buildings = getBuildingsOfCampus(campusIndex)
    this.setData({
      buildings,
      buildingNames: buildings.map((b) => b.title),
      buildingIndex: 0
    }, () => {
      /** 查询是否需要单元号 */
      let { buildings, campusIndex, buildingIndex } = this.data
      let needUnit = isNeedUnit(buildings[buildingIndex].num, campusIndex)
      this.setData({
        needUnit
      })
    })
  },

  /** 选中楼栋 */
  bindBuilding: function(e) {
    let buildingIndex = parseInt(e.detail.value);
    this.setData({
      buildingIndex,
      needUnit: false,
      chargeCode: ''
    })
    /** 查询是否需要单元号 */
    let { buildings, campusIndex } = this.data
    let needUnit = isNeedUnit(buildings[buildingIndex].num, campusIndex)
    this.setData({
      needUnit
    })
  },

  /** 选中区/单元 */
  bindUnit: function(e) {
    let unitIndex = parseInt(e.detail.value);
    this.setData({
      unitIndex,
      chargeCode: ''
    })
  },

  /** 输入房间号 */
  bindRoom: function (e) {
    let room = e.detail.value
    this.setData({
      room,
      chargeCode: ''
    })
  },

  /** 点击查询按钮 */
  bindSubmit: function (e) {
    let campus = this.data.campusIndex,
        buildingNum = this.data.buildings[this.data.buildingIndex].num,
        unit = this.data.unitIndex + 1,
        room = this.data.room
    
    let chargeCode = getChargeCode(buildingNum, campus, unit, room),
        roomStr = checkCodeValid(chargeCode)

    if (!roomStr) {
      /** 此电费账号在数据库中不存在 */
      wx.showToast({
        title: '未查询到您的电费单号',
        icon: 'none'
      })
      setTimeout(() => {
        wx.hideToast()
      }, 1500)
      return;
    }

    this.setData({
      chargeCode,
      roomStr
    })
  },

  /** 保存电费账号 */
  bindSave: function () {
    let { 
          chargeCode, 
          campusNames, campusIndex, 
          buildingNames, buildingIndex, 
          unitNames, unitIndex, needUnit,
          room
        } = this.data
    let addr = `${campusNames[campusIndex]}-${buildingNames[buildingIndex]}`;
    if(needUnit) addr += `-${unitIndex + 1}`;  /** 若不需要单元/区号，则不应添加 */
    addr += `-${room}`;
    let result = saveCodeToStor(addr, chargeCode)

    if(!result) {
      wx.reLaunch({
        url: '../index/index'
      })
    } else {
      wx.showToast({
        title: '保存失败，请重试',
        icon: 'none'
      })
      setTimeout(() => (
        wx.hideToast()
      ), 1500)
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '查询西电电费账号'
    }
  }
})