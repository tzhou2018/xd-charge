import {
  codes
} from './chargeCodesData';

/**
 * 存储一条新的电费账号
 *
 * @param {*} addr 门牌号
 * @param {*} chargeCode 电费账号
 * @returns
 */
let saveCodeToStor = (addr, chargeCode) => {
  let codes = wx.getStorageSync('chargeCodes');
  codes = Array.isArray(codes) ? codes : []
  codes.push({
    addr,
    chargeCode,
    id: (new Date()).getTime() + '' + (codes.length + 1)
  })

  try {
    wx.setStorageSync( 'chargeCodes', codes);
    return 0;
  } catch (e) {
    return e;
  }
}

/**
 * 获取电费账号列表
 *
 * @returns
 */
let getCodesFromStor = () => {
  let codes = wx.getStorageSync('chargeCodes');
  return Array.isArray(codes) ? codes : [];
}

/**
 * 删除一条电费账号
 *
 * @param {*} code_id 电费账号记录id
 * @returns
 */
let delCodeInStor = (code_id) => {
  let codes = wx.getStorageSync('chargeCodes');
  codes = codes.filter((code) => code.id !== code_id)

  try {
    wx.setStorageSync( 'chargeCodes', codes);
    return codes;
  } catch (e) {
    return e;
  }
}

/**
 * 校验电费单号
 *
 * @param {*} chargeCode
 * @returns 门牌号字符串
 */
let checkCodeValid = (chargeCode) => {
  let validFlag = codes.some((code) => code.c === chargeCode);

  if(validFlag) {
    let code = codes.filter((code) => code.c === chargeCode)[0]
    return `${code.n}-${code.r}`
  }

  return ''
}

module.exports = {
  saveCodeToStor,
  getCodesFromStor,
  delCodeInStor,
  checkCodeValid
}