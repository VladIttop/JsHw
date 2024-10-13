let counter = 0;

setInterval(() => {
if (counter <= 5) {
    counter++;
    console.log(`Counter: ${counter}`);
}
}, 1000);