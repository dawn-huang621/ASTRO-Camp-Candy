        // 編號：CANDY-008
        // 程式語言：JavaScript
        // 題目：傳入一字串，計算得分最高的字
        //      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
        //      所有傳入的字都是小寫。

        function highestScoreWord(input) {
            let arr = [];
            let letters = Array.from(input);
            console.log("letters",letters);
            for(let i = 97; i<123; i++){
                String.fromCharCode(i);
                arr.push(String.fromCharCode(i));
            }
            console.log(arr);
            let gradeArr = letters.map((letter)=>{
                return arr.indexOf(letter) + 1
            })
            console.log(gradeArr);
        }

        console.log(highestScoreWord("lorem ipsum dolor sit amet")) // 印出 ipsum
        // console.log(highestScoreWord("heyn i need a rubygem up to build this")) // 印出 rubygem
        // console.log(highestScoreWord("in time machine there are some bugs")) // 印出 there