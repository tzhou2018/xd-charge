/**
 * 
 * id
 * num 实际楼号
 * title 楼名
 * campus 校区 1-北校区 2-南校区
 * hasUnit 是否有单元或分区
 * cRule C段规则
 * dRule D段规则
 * 
 */


module.exports = {
    "buildings": [
        // 南校区
        { "id":  1, "num":  1, "title":  "竹园1号楼", "campus": 2, "hasUnit":  true, "cRule": 4, "dRule": 0},
        { "id":  2, "num":  2, "title":  "竹园2号楼", "campus": 2, "hasUnit":  true, "cRule": 4, "dRule": 0},
        { "id":  3, "num":  3, "title":  "竹园3号楼", "campus": 2, "hasUnit":  true, "cRule": 4, "dRule": 0},
        { "id":  4, "num":  4, "title":  "竹园4号楼", "campus": 2, "hasUnit":  true, "cRule": 4, "dRule": 0},
        { "id":  5, "num":  5, "title":  "海棠5号楼", "campus": 2, "hasUnit":  true, "cRule": 2, "dRule": 2},
        { "id":  6, "num":  6, "title":  "海棠6号楼", "campus": 2, "hasUnit": false, "cRule": 0, "dRule": 0},
        { "id":  7, "num":  7, "title":  "海棠7号楼", "campus": 2, "hasUnit": false, "cRule": 0, "dRule": 0},
        { "id":  8, "num":  8, "title":  "海棠8号楼", "campus": 2, "hasUnit":  true, "cRule": 2, "dRule": 2},
        { "id":  9, "num":  9, "title":  "海棠9号楼", "campus": 2, "hasUnit":  true, "cRule": 2, "dRule": 2},
        { "id": 10, "num": 10, "title": "海棠10号楼", "campus": 2, "hasUnit":  true, "cRule": 2, "dRule": 2},
        { "id": 11, "num": 11, "title": "丁香11号楼", "campus": 2, "hasUnit":  true, "cRule": 2, "dRule": 2},
        { "id": 12, "num": 12, "title": "丁香12号楼", "campus": 2, "hasUnit":  true, "cRule": 2, "dRule": 2},
        { "id": 13, "num": 13, "title": "丁香13号楼", "campus": 2, "hasUnit": false, "cRule": 1, "dRule": 1},
        { "id": 14, "num": 14, "title": "丁香14号楼", "campus": 2, "hasUnit":  true, "cRule": 2, "dRule": 2},
        { "id": 15, "num": 15, "title": "丁香15号楼", "campus": 2, "hasUnit": false, "cRule": 1, "dRule": 1},
        // 北校区
        { "id": 16, "num":  4, "title":  "4号楼", "campus": 1, "hasUnit": false, "cRule": 3, "dRule": 0},
        { "id": 17, "num": 16, "title": "16号楼", "campus": 1, "hasUnit":  true, "cRule": 2, "dRule": 0},
        { "id": 18, "num": 17, "title": "17号楼", "campus": 1, "hasUnit":  true, "cRule": 2, "dRule": 0},
        { "id": 19, "num": 21, "title": "21号楼", "campus": 1, "hasUnit": false, "cRule": 3, "dRule": 0},
        { "id": 20, "num": 24, "title": "24号楼", "campus": 1, "hasUnit": false, "cRule": 3, "dRule": 0},
        { "id": 21, "num": 28, "title": "28号楼", "campus": 1, "hasUnit": false, "cRule": 3, "dRule": 0},
        { "id": 22, "num": 47, "title": "47号楼", "campus": 1, "hasUnit": false, "cRule": 3, "dRule": 0},
        { "id": 23, "num": 48, "title": "48号楼", "campus": 1, "hasUnit": false, "cRule": 3, "dRule": 0},
        { "id": 24, "num": 49, "title": "49号楼", "campus": 1, "hasUnit": false, "cRule": 3, "dRule": 0},
        { "id": 25, "num": 51, "title": "51号楼", "campus": 1, "hasUnit": false, "cRule": 3, "dRule": 0},
        { "id": 26, "num": 52, "title": "52号楼", "campus": 1, "hasUnit": false, "cRule": 3, "dRule": 0},
        { "id": 27, "num": 53, "title": "53号楼", "campus": 1, "hasUnit": false, "cRule": 3, "dRule": 0},
        { "id": 28, "num": 55, "title": "55号楼", "campus": 1, "hasUnit": false, "cRule": 3, "dRule": 0},
        { "id": 29, "num": 94, "title": "94号楼", "campus": 1, "hasUnit": false, "cRule": 3, "dRule": 0},
        { "id": 30, "num": 95, "title": "95号楼", "campus": 1, "hasUnit": false, "cRule": 3, "dRule": 0},
        { "id": 31, "num": 96, "title": "96号楼", "campus": 1, "hasUnit": false, "cRule": 3, "dRule": 0},
        { "id": 32, "num": 97, "title": "97号楼", "campus": 1, "hasUnit": false, "cRule": 3, "dRule": 0},
        { "id": 33, "num": 98, "title": "98号楼", "campus": 1, "hasUnit": false, "cRule": 3, "dRule": 0}
    ],
    "excepts": [
        { "num":  4, "campus": 1, "unit": 0, "room": 203, chargeCode: '10040202032'},
        { "num":  4, "campus": 1, "unit": 0, "room": 204, chargeCode: '10040202042'},
        { "num":  4, "campus": 1, "unit": 0, "room": 305, chargeCode: '10040303052'},
        { "num":  4, "campus": 1, "unit": 0, "room": 306, chargeCode: '10040303062'},
        { "num":  4, "campus": 1, "unit": 0, "room": 407, chargeCode: '10040404072'},
        { "num":  4, "campus": 1, "unit": 0, "room": 408, chargeCode: '10040404082'},
        { "num":  4, "campus": 1, "unit": 0, "room": 409, chargeCode: '10040404092'},
        { "num":  4, "campus": 1, "unit": 0, "room": 510, chargeCode: '10040505102'},   
        { "num": 24, "campus": 1, "unit": 0, "room": 101, chargeCode: "10240101012"},
        { "num": 24, "campus": 1, "unit": 0, "room": 102, chargeCode: "10240101022"},
        { "num": 24, "campus": 1, "unit": 0, "room": 203, chargeCode: "10240202032"},
        { "num": 24, "campus": 1, "unit": 0, "room": 204, chargeCode: "10240202042"},
        { "num": 24, "campus": 1, "unit": 0, "room": 305, chargeCode: "10240303052"},
        { "num": 24, "campus": 1, "unit": 0, "room": 306, chargeCode: "10240303062"},
        { "num": 47, "campus": 1, "unit": 0, "room": 101, chargeCode: "10470101012"},
        { "num": 47, "campus": 1, "unit": 0, "room": 102, chargeCode: "10470101022"},
        { "num": 47, "campus": 1, "unit": 0, "room": 103, chargeCode: "10470101032"},
        { "num": 47, "campus": 1, "unit": 0, "room": 104, chargeCode: "10470101042"},
        { "num": 48, "campus": 1, "unit": 0, "room": 101, chargeCode: "10480101012"},
        { "num": 48, "campus": 1, "unit": 0, "room": 102, chargeCode: "10480101022"},
        { "num": 48, "campus": 1, "unit": 0, "room": 103, chargeCode: "10480101032"},
        { "num": 48, "campus": 1, "unit": 0, "room": 104, chargeCode: "10480101042"},
        { "num": 49, "campus": 1, "unit": 0, "room": 101, chargeCode: "10490101012"},
        { "num": 49, "campus": 1, "unit": 0, "room": 102, chargeCode: "10490101022"},
        { "num": 49, "campus": 1, "unit": 0, "room": 203, chargeCode: "10490202032"},
        { "num": 49, "campus": 1, "unit": 0, "room": 204, chargeCode: "10490202042"},
        { "num": 49, "campus": 1, "unit": 0, "room": 305, chargeCode: "10490303052"},
        { "num": 49, "campus": 1, "unit": 0, "room": 306, chargeCode: "10490303062"},
        { "num": 51, "campus": 1, "unit": 0, "room": 101, chargeCode: "10510101012"},
        { "num": 51, "campus": 1, "unit": 0, "room": 102, chargeCode: "10510101022"},
        { "num": 51, "campus": 1, "unit": 0, "room": 203, chargeCode: "10510202032"},
        { "num": 51, "campus": 1, "unit": 0, "room": 204, chargeCode: "10510202042"},
        { "num": 51, "campus": 1, "unit": 0, "room": 305, chargeCode: "10510303052"},
        { "num": 51, "campus": 1, "unit": 0, "room": 306, chargeCode: "10510303062"},
        { "num": 52, "campus": 1, "unit": 0, "room": 101, chargeCode: "10520101012"},
        { "num": 52, "campus": 1, "unit": 0, "room": 102, chargeCode: "10520101022"},
        { "num": 52, "campus": 1, "unit": 0, "room": 103, chargeCode: "10520101032"},
        { "num": 52, "campus": 1, "unit": 0, "room": 104, chargeCode: "10520101042"},
        { "num": 53, "campus": 1, "unit": 0, "room": 101, chargeCode: "10530101012"},
        { "num": 53, "campus": 1, "unit": 0, "room": 102, chargeCode: "10530101022"},
        { "num": 53, "campus": 1, "unit": 0, "room": 103, chargeCode: "10530101032"},
        { "num": 53, "campus": 1, "unit": 0, "room": 104, chargeCode: "10530101042"},
        { "num": 55, "campus": 1, "unit": 0, "room": 101, chargeCode: "10550101012"},
        { "num": 55, "campus": 1, "unit": 0, "room": 102, chargeCode: "10550101022"},
        { "num": 55, "campus": 1, "unit": 0, "room": 203, chargeCode: "10550202032"},
        { "num": 55, "campus": 1, "unit": 0, "room": 204, chargeCode: "10550202042"},
        { "num": 55, "campus": 1, "unit": 0, "room": 305, chargeCode: "10550303052"},
        { "num": 55, "campus": 1, "unit": 0, "room": 306, chargeCode: "10550303062"},
        { "num": 55, "campus": 1, "unit": 0, "room": 407, chargeCode: "10550404072"},
        { "num": 55, "campus": 1, "unit": 0, "room": 408, chargeCode: "10550404082"},
        { "num": 55, "campus": 1, "unit": 0, "room": 509, chargeCode: "10550505092"},
        { "num": 55, "campus": 1, "unit": 0, "room": 510, chargeCode: "10550505102"},
        { "num": 12, "campus": 2, "unit": 1, "room": 211, chargeCode: "20120112111/2"}
    ]
}