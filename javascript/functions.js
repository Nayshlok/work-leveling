function doMath(x, y){
    return x * y;
}

var doubling = function(x){
    const val = x * x;
    if(!val){
        throw 5;
    }
    return val;
}

var doublingNamed = function double(x){
    return x * x;
}

console.log((function() {
    return 'Hello, I execute immediately';
})());

function* crazyGenerator(){
    let base = 0;
    let count = 0;
    while(count < 5){
        let number = Math.floor(Math.random() * 100);
        if(base < number){
            base = number;
            count = 0;
            yield base;
        }
        else{
            count++;
        }
    }
    return -1;
}

const gen = crazyGenerator();

let num = gen.next();
while(num.value != -1){
    console.log('Ever increasing random', num.value);
    num = gen.next();
}

console.log('Math', doMath(5, 4));

console.log('double anon', doubling(5));
try{
    console.log('doubling anon error', doubling('hi'));
}
catch(ex){
    console.error(ex);
}
/**
 * OKay so this is hard to show. The biggest reason you want to use a named function is for error handling and debugging
 * Because the function ahs a name, it becomes easy to determine where in the code the error is happening. With only anonymous
 * functions we have no names to go by, and have to rely upon line numbers, which when you introduce babel and transpilers, it
 * becomes very unwieldly and difficult to determine where code lives.
 */
console.log('double named', doublingNamed(5));

try{
    console.log('doubling named error', doublingNamed('hi'));
}
catch(ex){
    console.error(ex);
}