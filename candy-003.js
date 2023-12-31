        // 編號：CANDY-003
        // 程式語言：JavaScript
        // 題目：完成函數的內容，把陣列裡的 0 都移到最後面

        let list = [false, 1, 0, -1, 2, 0, 1, 3, "a"]

        function moveZerosToEnd(arr) {
            const zeroArr = list.filter(value=> value === 0)
            const noZeroArr = list.filter(value=> value !== 0)
            return noZeroArr.concat(zeroArr)
        }

        let result = moveZerosToEnd(list)
        console.log(result) // 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

      //資料來源: 
        //chatgpt 提供的更精簡寫法，過濾不是0，過濾0，然後兩個陣列合併