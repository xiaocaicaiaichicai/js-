//在循环中用promise阻塞循环

var testPromise = new Promise(resolve => {
    setTimeout(() => {
        resolve({
            code: 0,
            message: '操作成功'
        })
    }, 1000)
});
async function test() {
    for (let i = 0; i < 10; i++) {
        await testPromise.then(res => {
            console.log(res.message + i)
        })
        console.log("外部循环" + i)
    }
}