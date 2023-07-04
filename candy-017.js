// 編號：CANDY-017
// 程式語言：JavaScript
// 題目：計算數字的 2 進位裡有幾個 1
// 範例：5 -> 101 -> 2 個 1

function countBits(num) {
// 實作寫在這裡
    twoDigit = Array.from(num.toString(2))
    let ans = twoDigit.reduce((ac, cv)=>{
        if(cv === '1'){
            return ac + 1
        }else{
            return ac
        }
    },0)
    return ans
}
// 資料來源
// chatgpt
// 在JavaScript中，可以使用toString()方法並指定基數（radix）為2，將數字轉換成二進位表示形式。

console.log(countBits(1234)) // 5
console.log(countBits(1450)) // 6
console.log(countBits(9527)) // 8