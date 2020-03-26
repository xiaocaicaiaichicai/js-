//sku生成方法 （js回溯）
const arr = [{
    value: ['蓝色', '大红色', '白色']
}, {
    value: ['43码', '42码']
}, {
    value: ['￥500', '￥300']
}, {
    value: ['广州', '南京']
}]

function descartesArr(arr) {
    const result = arr.map((item, index) => {
        return item.value.map(val => {
            return {
                [index]: val
            }
        })
    })
    while (result.length > 1) {
        const temp = []
        result[0].forEach(item => {
            result[1].forEach(items => {
                temp.push({
                    ...item,
                    ...items
                })
            })
        })
        result.splice(0, 2, temp)
    }
    return result[0]
}