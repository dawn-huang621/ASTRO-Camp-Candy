// 編號：CANDY-003
// 程式語言：JavaScript
// 題目：完成函數的內容，把陣列裡的 0 都移到最後面

let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"]

function moveZerosToEnd(arr) {
    // console.log(arr)
    const listIndex = []
    //如果值等0進行把該值的位置裝進listIndex這個陣列
    console.log(listIndex)
    list.forEach((value,index)=>{
        if(value === 0){
            listIndex.push(index)
        }
    })

    for(let i = 0; i <listIndex.length; i++){
        //刪除0
        arr.splice(listIndex[i]-i, 1)
        //把0加到陣列最後
        arr.splice((arr.length), 0, 0)
    }
    return arr
    
    // 找出規則
    // console.log(listIndex)
    // arr.splice(listIndex[0], 1)
    // arr.splice((arr.length), 0, 0)
    // // console.log('arr1',arr)
    // arr.splice(listIndex[1]-1, 1)
    // arr.splice((arr.length), 0, 0)
}

let result = moveZerosToEnd(list)
console.log(result) // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

//資料來源: 
//https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice