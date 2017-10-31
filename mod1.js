var counter = 0;
console.log(counter);
module.exports = () => {
    counter += 1;
    console.log('Counter in function', counter);
};
