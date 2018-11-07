let getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'Vickrum'
    }
    setTimeout(() => {
        callback(user);
    }, 3000)
};

getUser(31, (useObjectr) => {
    console.log(useObjectr);
})