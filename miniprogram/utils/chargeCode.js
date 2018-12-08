/**
 * 存储一条新的用电账号
 *
 * @param {*} addr 门牌号
 * @param {*} chargeCode 用电账号
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
 * 获取用电账号列表
 *
 * @returns
 */
let getCodesFromStor = () => {
  let codes = wx.getStorageSync('chargeCodes');
  return Array.isArray(codes) ? codes : [];
}

/**
 * 删除一条用电账号
 *
 * @param {*} code_id 用电账号记录id
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

module.exports = {
  saveCodeToStor,
  getCodesFromStor,
  delCodeInStor
}