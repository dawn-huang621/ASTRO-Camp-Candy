        // 編號：CANDY-016
        // 程式語言：JavaScript
        // 題目：把原本 snake_case 的字轉換成 camelCase 格式
        // 範例："hello_world" -> "helloWorld"

        function toCamelCase(str) {
            let result = str.split('');
            result.forEach((el, idx) => {
                if(el === "_"){
                    result.splice(idx, 1);
                    result.splice(idx, 1, result[idx].toUpperCase());
                }
            });
            return result.join("")
        }

        console.log(toCamelCase("book")) // book
        console.log(toCamelCase("book_store")) // bookStore
        console.log(toCamelCase("get_good_score")) // getGoodScore