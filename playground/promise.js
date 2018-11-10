let somePromise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        // resolve('Hey It worked');
        reject('Whoopies');
    }, 2500)
   
});


somePromise.then((message) => {
    console.log('Success', message);

}, (errorMessage) => {
    console.log('Error: ', errorMessage);
})



somePromise.then((message) => {
    console.log('Success', message);
})
.catch(err => {
    console.log(err, "oh no");
})

