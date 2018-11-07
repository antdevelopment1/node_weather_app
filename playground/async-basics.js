// Step 1
console.log('Starting app');

// Step 3
setTimeout( () => {
    console.log('Inside of callback');
}, 2000);

setTimeout(() => {
    console.log('Howdy I am before the other set timeout even though I came after');
}, 0)

// Step 2
console.log('Finishing app');


