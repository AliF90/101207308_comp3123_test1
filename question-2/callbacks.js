const resolvedPromise = () =>{
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            let success = {'message': 'delayed success!'};
            resolve(success);
        }, 500)
    })
};


const rejectedPromise = () => {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            try {
                throw new Error('error: delayed excecption!');
            } catch (e) {
                reject(e);
            }
        }, 500)
    })
}

resolvedPromise()
    .then(result => console.log(result))

rejectedPromise()
    .then(result => console.log(result))
