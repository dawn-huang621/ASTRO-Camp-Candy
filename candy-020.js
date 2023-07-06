// 編號：CANDY-020
// 程式語言：JavaScript
// 題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

function xxoo(str) {
    // 實作寫在這裡
    let lowerCase = str.toLowerCase()
    let oLength = lowerCase.match(/o/g).length;
    let xLength = lowerCase.match(/x/g) === null ? 0: lowerCase.match(/x/g).length;
    return oLength === xLength;
}

資料來源:
// chatgpt
// 關於正規表達式寫法，以及return的值
console.log(xxoo("ooxx")) // true
console.log(xxoo("xxoo")) // true
console.log(xxoo("xxooo")) // false
console.log(xxoo("xoox")) // true
console.log(xxoo("ooAA")) // false
console.log(xxoo("xoXoA")) // true