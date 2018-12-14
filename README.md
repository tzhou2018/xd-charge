# 「西电电了个费」微信小程序

查询西电学生公寓电费账号，提供记录功能，支持南/北校区。根据后勤处「[学生预付费电表账号编码规则](http://see.xidian.edu.cn/html/news/9179.html)」制作，仅供参考。

### 代码目录

1.页面


* 首页 - [pages/index/index](./miniprogram/pages/index)
* 查询 - [pages/query/query](./miniprogram/pages/query)
* 关于 - [pages/about/about](./miniprogram/pages/about)

2.逻辑封装

* 账号生成算法 - [utils/buildings/buildings.js](./miniprogram/utils/buildings/buildings.js)
* 输入及校验 - [utils/chargeCode.js](./miniprogram/utils/chargeCode.js)

3.数据

* 楼栋信息及例外账号 - [utils/buildings/buildingsData.js](./miniprogram/utils/buildings/buildingsData.js)
* 原始账号（供校验） - [utils/chargeCodesData.js](./miniprogram/utils/chargeCodesData.js)

### 更新日志

**v1.1.1**

* 新增：查电费网址提示

**v1.0.0**

* 输入房间号生成电费账号
* 保存电费账号，方便下次查看