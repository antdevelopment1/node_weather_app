// Step 1
console.log('Starting app 1');

// Step 4
setTimeout( () => {
    console.log('Inside of callback 4');
}, 2000);

// Step 3
setTimeout(() => {
    console.log('Howdy I am before the other set timeout even though I came after 3');
}, 0)

// Step 2
console.log('Finishing app 2');


