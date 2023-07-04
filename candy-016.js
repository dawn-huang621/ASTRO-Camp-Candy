        // 編號：CANDY-016
        // 程式語言：JavaScript
        // 題目：把原本 snake_case 的字轉換成 camelCase 格式
        // 範例："hello_world" -> "helloWorld"

        function toCamelCase(str) {
            let result = ""
            let upperCaseArr = []
            for(let i = 0; i<str.length; i++){
                if(str[i] === '_'){
                    let upperCase = str[i+1].toUpperCase();
                    result+= "" +  upperCase 
                } else {
                    result+= str[i] 
                }
            }
            result.split("")
            // for(let i = 0; i<result.length; i++){
            //         // console.log(result.charCodeAt(i))
            //     if(result.charCodeAt(i) > 97 && result.charCodeAt(i) < 123 ){
            //         console.log(result[i])
            //     }
            // }
        }

        // console.log(toCamelCase("book")) // book
        // console.log(toCamelCase("book_store")) // bookStore
        console.log(toCamelCase("get_good_score")) // getGoodScore