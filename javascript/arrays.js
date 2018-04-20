console.log('hello world!');

console.log('push the array');
const arrayToManipulate = [];

arrayToManipulate.push(5);
arrayToManipulate.push(6, 3, [1, 5, 2]);

console.log('array', arrayToManipulate);

console.log('pop the array');
const element = arrayToManipulate.pop();

console.log('element', element);
console.log('array', arrayToManipulate);

console.log('splicing arrays');
const splicedElement = element.splice(1, 1);

console.log('element', element);
console.log('spliced', splicedElement);

console.log('slicing arrays');
const slicedArray = arrayToManipulate.slice();

console.log('sliced', slicedArray);
console.log('array', arrayToManipulate);

console.log('splicing one of arrays');
slicedArray.splice(1, 2);

console.log('sliced', slicedArray);
console.log('array', arrayToManipulate);

console.log('shiftings');
const removedItem = arrayToManipulate.shift();

console.log('array', arrayToManipulate);
console.log('removed', removedItem);

console.log('unshift');
arrayToManipulate.unshift(100);

console.log('array', arrayToManipulate);

const bigArray = arrayToManipulate.concat([23, 45, 1, 65]);

console.log('big array', bigArray);

console.log('mapping arrays');
const doubledArray = bigArray.map(x => 2 * x);

console.log('doubled', doubledArray);

console.log('reducing arrays');
const reducedArray = doubledArray.reduce((agg, x) => {
    if(x > 50){
        return agg += x;
    }
    return agg;
});

console.log('reduced', reducedArray);
