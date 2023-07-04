        // 編號：CANDY-006
        // 程式語言：JavaScript
        // 題目：找出在數字陣列裡跟其它元素不一樣的值

        function findDifferent(numbers) {
            // 實作寫在這裡
            let duplicateValue = 0
            numbers.forEach((num, index)=>{
                if(num === numbers[index-1]){ duplicateValue = num }
            })
            let arrayOnlyValue = numbers.filter(num=> num != duplicateValue)
            return Number(arrayOnlyValue[0])
        }

        console.log(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])) // 印出 3
        console.log(findDifferent([2, 2, 2, 4, 2, 2])) // 印出 4
        console.log(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])) // 印出 8