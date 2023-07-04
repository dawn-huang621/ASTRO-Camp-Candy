// 編號：CANDY-002
// 程式語言：JavaScript
// 題目：請寫一小段程式，印出連續陣列裡缺少的字元

const chars1 = ["a", "b", "c", "d", "f", "g"]
const chars2 = ["O", "Q", "R", "S"]

function missingChar(chars) {
// 實作寫在這裡
    let codeChars = chars.map ( ( text ) => {
        return text.charCodeAt (0)
    })
    for ( let i = 0 ; i < codeChars.length - 1; i++ ) {
        if ( codeChars [i]+1 !== codeChars [i+1] ) {
        return String.fromCharCode( codeChars[i]+1 );
        }
    }
}

console.log(missingChar(chars1)) // 印出 e
console.log(missingChar(chars2)) // 印出 P