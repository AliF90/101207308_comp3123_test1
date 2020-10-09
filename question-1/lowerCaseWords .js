//Seyed Ali Farahmand
//101207308
const lowerCaseWords = (arr) => {
    return new Promise(function(resolve, reject){
        var result = arr.filter(e => typeof e === 'string' && e !== '') 
        var lastresult = [];
        for (var i = 0; i < result.length; i++) {
            lastresult.push(result[i].toLowerCase());
        }
        console.log(lastresult)
        resolve(lastresult);
    })
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
lowerCaseWords(mixedArray)