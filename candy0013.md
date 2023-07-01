
            // for(let i = 0; i<vatFiguresSplit.length; i++){
            //     if(vatFiguresSplit[i].length === 2){
            //         vatFiguresSplit
            //     }
            //     console.log(vatFiguresSplit[i])
                
                // const firstAddUp = vatNumber.reduce((ac, cv)=> ac + cv)
                // console.log(firstAddUp)
                // multiplicationResult.push(firstAddUp)
            // }
            // console.log(Array.from(vat)[6])

            
                console.log()
                let addUp = multiplicationResult.reduce((ac, cv)=> ac + cv)
                sum += addUp + 1
            }else{
                // 如果不是的話可以直接相加
                let addUp = multiplicationResult.reduce((ac, cv)=> ac + cv)
                sum += addUp 
            }
            console.log(sum)
            if(sum %5 === 0){
                console.log(sum)
            }


            
            let sum = vatFiguresSplit.reduce((ac, cv)=>{
                if(cv.length === 2){
                    cv = cv[0]*1 + cv[1]*1
                    return ac + cv
                }else{
                    return ac + cv[0]*1
                }
            },0)