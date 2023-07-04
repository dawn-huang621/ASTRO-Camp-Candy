        // 編號：CANDY-015
        // 程式語言：JavaScript
        // 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
        // 範例：
        //      "abcdef" -> ['ab', 'cd', 'ef']
        //      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

        function splitString(str) {
        // 實作寫在這裡
            let ans = []
            if(str.length % 2 == 1){
                str = str.padEnd(str.length + 1, "_")
            }
            for(let i = 0; i < str.length; i++){
                if(i%2 === 0){
                    ans.push(str[i].concat('', str[i+1]))
                }
            }
            return ans
        };

        console.log(splitString("abcdef")) // ["ab", "cd", "ef"]
        console.log(splitString("abcdefg")) // ["ab", "cd", "ef", "g_"]
        console.log(splitString("")) // []