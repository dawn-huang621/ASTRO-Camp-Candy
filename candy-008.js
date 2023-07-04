        // 編號：CANDY-008
        // 程式語言：JavaScript
        // 題目：傳入一字串，計算得分最高的字
        //      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
        //      所有傳入的字都是小寫。

        function highestScoreWord(input) {
            // 實作寫在這裡
            arr = []
            let word = input.split(' ')
            let letterArray = word.map(letter=>{
                return Array.from(letter)
            })
            // console.log(letterArray)
            for(let i = 97; i<123; i++){
                String.fromCharCode(i)
                arr.push(String.fromCharCode(i))
            }
            let wordTotalScore = 0
            letterArray.forEach(wordArray=>{
                let letterScore = []
                for(let i = 0;  i< wordArray.length; i++){
                    // console.log((arr.indexOf(wordArray[i])) + 1)
                    letterScore.push((arr.indexOf(wordArray[i])) + 1)
                }
                wordTotalScore.push(letterScore.reduce((ac, cv)=> ac + cv,0))
                console.log(count)
                // wordTotalScore.push(count)
            })
            console.log(wordTotalScore)
        }

        console.log(highestScoreWord("lorem ipsum dolor sit amet")) // 印出 ipsum
        // console.log(highestScoreWord("heyn i need a rubygem up to build this")) // 印出 rubygem
        // console.log(highestScoreWord("in time machine there are some bugs")) // 印出 there