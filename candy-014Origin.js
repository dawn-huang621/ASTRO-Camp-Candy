        // 編號：CANDY-014
        // 程式語言：JavaScript
        // 題目：把鄰近的重複值去除，但仍照原本的順序排序
        // 範例："AAABBBDDDAABBBCC" -> ['A', 'B', 'D', 'A', 'B', 'C']

        function uniqueOrder(sequence) {
        // 實作寫在這裡
            let filterRepeat = []
            for(let i = 0; i < sequence.length; i++){
                if(sequence[i] !== sequence[i+1]){
                    filterRepeat.push(sequence[i])
                }
            }
            return filterRepeat
        };

        console.log(uniqueOrder("AABCC")) // [ 'A', 'B', 'C']
        console.log(uniqueOrder("AAABBBCCBCC")) // [ 'A', 'B', 'C', 'B', 'C']
        console.log(uniqueOrder([1, 2, 1, 2, 1])) // [ 1, 2, 1, 2, 1 ]
        console.log(uniqueOrder([1, 1, 1, 2, 2, 2, 1])) // [1, 2, 1]