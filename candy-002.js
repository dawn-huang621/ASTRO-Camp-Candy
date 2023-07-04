
// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"]
const chars2 = ["O", "Q", "R", "S"]

function missingChar(chars) {
    //原本卡在大小寫判斷，但聽過同學說後發現，英文陣列都是一串一起的，a到z是連貫，A到Z是連貫
    let arrayCode = chars.map((char)=> char.charCodeAt(0) )
    for ( let i = 0 ; i < arrayCode.length -1; i++ ) {
        console.log(arrayCode [i]+1)
        console.log(arrayCode [i+1])
        //arrayCode[i]+1 是表示連續的數
        //arrayCode [i]+1 是表示字母的code+1
        if ( arrayCode [i]+1 !== arrayCode [i+1] ) { 
            return String.fromCharCode( arrayCode [i]+1 );
        }
    }
}
console.log(missingChar(chars1)) // 印出 e
console.log(missingChar(chars2)) // 印出 P

// 提示：
// 可使用字串的 charCodeAt 方法...

// 資料來源:
    // 同學的講解