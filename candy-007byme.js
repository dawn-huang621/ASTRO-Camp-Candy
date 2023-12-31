        // 編號：CANDY-007
        // 程式語言：JavaScript
        // 題目：在某個數字陣列裡，可能藏有某個不合群的奇數或偶數，試著找出它！

        function findSomeDifferent(numbers) {
            // 偶數
            evenOfTimes = 0
            oddnumberOfTimes = 0
            ans = 0
            // 記數
            numbers.forEach(num=>{
                (num%2 === 0) ? (evenOfTimes += 1) : (oddnumberOfTimes += 1)
            })
            // console.log(evenOfTimes, oddnumberOfTimes, ans)
            if(evenOfTimes === 1){
                numbers.forEach(num=>{ if(num%2 === 0){ ans = num } })
            }else{
                numbers.forEach(num=>{ if(num%2 != 0){ ans = num } })
            }
            return ans
        }

        console.log(findSomeDifferent([2, 4, 0, 100, 4, 11, 2602, 36])) // 印出 11
        console.log(findSomeDifferent([160, 3, 1719, 19, 11, 13, -21])) // 印出 160