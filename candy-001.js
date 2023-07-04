
// 編號：CANDY-001
// 程式語言：JavaScript
// 題目：找出陣列裡最小的兩個值的總和
// 例如：
//   [15, 28, 4, 2, 43] 印出 6
//   [23, 71, 33, 82, 1] 印出 24


function sumOfSmallestValues(arr) {
    // 如果直接排序會因為十位數字出錯，所以使用a-b就是升冪排序，a-b是前一個數字減掉後面的數字，如果答案比0小，a會排在b前面，如果比0大，則相反，如果等於0，則不會改變a和b的順序
    let newarr = arr.sort((a, b)=> a - b)
    //將排序大小後，最前面(最小)兩個數相加
    return newarr[0] + newarr [1] 
}

const list1 = [19, 5, 42, 2, 77]
const list2 = [23, 15, 59, 4, 17]

console.log(sumOfSmallestValues(list1)) // 印出 7
console.log(sumOfSmallestValues(list2)) // 印出 19

//來源: 
    //https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort + 6/15實體上課教學(最後一個影片)
