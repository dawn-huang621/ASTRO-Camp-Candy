        // 編號：CANDY-013
        // 程式語言：JavaScript
        // 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
        // https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283

        function isValidVatNumber(vat) {
        // 實作寫在這裡
            let logicalMultiplier = [1, 2, 1, 2, 1, 2, 4, 1];
            multiplicationResult = []
            let vatFiguresSplit = Array.from(vat)
                                       .map((num,index)=> Array.from((Number(num) * logicalMultiplier[index]) + ""));
            
            if(Array.from(vat)[6] == '7'){
                let sum = vatFiguresSplit.reduce((ac, cv)=>{
                    if(cv.length === 2){
                        cv = cv[0]*1 + cv[1]*1;
                        return ac + cv;
                    }else{
                        return ac + cv[0]*1;
                    }
                },0);
                return sum % 5 === 0 ? true : false;
            }else{
                let sum = vatFiguresSplit.reduce((ac, cv)=>{
                    if(cv.length === 2){
                        cv = cv[0]*1 + cv[1]*1;
                        return ac + cv;
                    }else{
                        return ac + cv[0]*1;
                    }
                },0);
                return sum % 5 === 0 ? true : false
            }
        }

        console.log(isValidVatNumber("10458575")) // true
        console.log(isValidVatNumber("10458575")) // true
        console.log(isValidVatNumber("88117125")) // true
        console.log(isValidVatNumber("53212539")) // true
        console.log(isValidVatNumber("88117126")) // false