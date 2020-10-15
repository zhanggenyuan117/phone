module.exports = function () {
    return {
        "code": 0,
        "message": "成功",
        "list": [
            {
                id: "1",
                name: "张根源",
                tel: "18866888866",
                address: "河南省郑州市高新区大学科技园孵化器一号楼",
                isDefault: true,
            },
            {
                id: "2",
                name: "张忍",
                tel: "18866668888",
                address: "河南省安阳市滑县道口镇华洲路",
                isDefault:false
            },
        ],
        "disabledList": [
            {
              id: '3',
              name: '汪汪队',
              tel: '1320000000',
              address: '浙江省杭州市滨江区江南大道 15 号',
            },
          ],
    }
}