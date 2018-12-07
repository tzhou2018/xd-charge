// var buildingsData = require('./buildings');

// var buildings = buildingsData.buildings
// var excepts = buildingsData.excepts

import {
    buildings,
    excepts
} from './buildingsData'

/* C段规则 */
const C_RULE_00   = 0;   /* C = 00 */
const C_RULE_01   = 1;   /* C = 01 */
const C_RULE_UNIT = 2;   /* C = 单元号或区号 */
const C_RULE_FLOR = 3;   /* C = 楼层 */
const C_RULE_U__F = 4;   /* C = 单元号或区号 + 楼层 */

/* D段规则 */
const D_RULE_0_R  = 0;   /* D = 0 + 房间号 */
const D_RULE_1_R  = 1;   /* D = 1 + 房间号*/
const D_RULE_U_R  = 2;   /* D = 单元号或区号 + 房间号 */


/**
 * 获取用电账户号码
 *
 * @param {*} buildingNum 楼号
 * @param {*} campus 校区 1-北校区 2-南校区
 * @param {*} unit 单元/区
 * @param {*} room 房间号
 * @returns
 */
function getChargeCode(buildingNum, campus, unit, room) {

    let hasExcept = excepts.some((item) => {
        return buildingNum == item.num && campus == item.campus && unit == item.unit && room == item.room
    })
    if(hasExcept) {
        let except = excepts.filter((item) => {
            return buildingNum == item.num && campus == item.campus && unit == item.unit && room == item.room
        })
        return except[0].chargeCode
    }

    let rules = buildings.filter((item, index) => {
        return buildingNum === item.num && campus === item.campus
    })
    if(rules.length !== 1) return 0;

    let rule = rules[0];
    let codeStr = []

    // 楼层
    let floor = parseInt(room.toString()[0])

    /** A段：校区 */
    codeStr.push(campus)

    /** B段：楼号 */
    codeStr.push((buildingNum < 10 ? '00' : '0') + buildingNum);

    /** C段 */
    switch(rule.cRule) {
        case C_RULE_00:
            codeStr.push('00'); 
            break;
        case C_RULE_01:
            codeStr.push('01'); 
            break;
        case C_RULE_UNIT:
            codeStr.push((unit < 10 ? '0' : '') + unit); 
            break;
        case C_RULE_FLOR:
            codeStr.push('0' + floor);
            break;
        case C_RULE_U__F:
            codeStr.push('' + unit + floor);
            break;
        default:
            return 0;
    }

    /** D段 */
    switch(rule.dRule) {
        case D_RULE_0_R:
            codeStr.push('0' + room); 
            break;
        case D_RULE_1_R:
            codeStr.push('1' + room); 
            break;
        case D_RULE_U_R:
            codeStr.push('' + unit + room); 
            break;
        default:
            return 0;
    }

    return codeStr.join('')
}

/**
 * 获取属于当前校区的楼栋
 *
 * @param {*} campus
 * @returns
 */
function getBuildingsOfCampus (campus) {
    return buildings.filter((item) => {
        return campus === item.campus
    })
}

/**
 * 根据楼栋属性查询是否需要获取单元号
 *
 * @param {*} buildingNum
 * @param {*} campus
 * @returns
 */
function isNeedUnit (buildingNum, campus) {
    let building = buildings.filter((item) => {
        return buildingNum === item.num && campus === item.campus
    })
    return building[0].cRule === C_RULE_UNIT || building[0].cRule === C_RULE_U__F || building[0].dRule === D_RULE_U_R
}

module.exports = {
    getChargeCode,
    getBuildingsOfCampus,
    isNeedUnit
}