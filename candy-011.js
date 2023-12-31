        // 編號：CANDY-011
        // 程式語言：JavaScript
        // 題目：找出一個數字陣列裡，出現奇數次數的數字
        // 範例：[1, 1, 0]，`0` 只有出現 1 次
        //      [5, 5, 8, 8, 8, 4, 4]，`8` 出現了 3  次
        
        function findOddElm(numbers) {
            const ans = []
            numbers.forEach((num, index) => {
                ans[num] = ans[num] ? ans[index]+1 : 1 
            });
            console.log(ans)
            // let calculationTimes = numbers.reduce((num, index)=>{
            //     // 如果指定的屬性位於指定的物件或其原型鏈中，則該in運算符返回
            //     if(index in num){
            //         num[index]++
            //     }else{
            //         num[index] = 1
            //     }
            //     return num
            // }, {})
            // //for in 可以遍歷物件跟陣列
            // for (const key in calculationTimes){
            //     if(calculationTimes[key] % 2 !== 0){ return key }
            // }
        }

        
        console.log(findOddElm([1, 1, 2])) // 印出 2
        console.log(findOddElm([5, 4, 2, 1, 5, 4, 2, 10, 10])) // 印出 1
        console.log(findOddElm([0, 1, 0, 1, 0])) // 印出 0
        console.log(findOddElm([1, 1, 2, -2, 5, 2, -1, -2, 5])) // 印出 -1
        console.log(findOddElm([20, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])) // 印出 5

        // 嘗試:
            // 如果把in用在運算中會報錯( Uncaught TypeError: Cannot use 'in' operator to search for '1' in undefined )
        //資料來源
            // reduce算陣列元素次數
            // https://eruditeness.news.blog/2020/02/16/%E5%9F%BA%E7%A4%8Ejavascript%E5%88%A9%E7%94%A8reduce%E7%B5%B1%E8%A8%88%E4%B8%80%E5%80%8B%E9%99%A3%E5%88%97%E4%B8%AD%E5%90%84%E5%85%83%E7%B4%A0%E5%87%BA%E7%8F%BE%E7%9A%84%E6%AC%A1%E6%95%B8/
            // mdn
            // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/for...in
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in