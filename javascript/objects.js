const propertyObject = new Object();

console.log('Object has something', propertyObject.hasOwnProperty('something'));
console.log('Object can do something', propertyObject.hasOwnProperty('doSomething'));

console.log('setting properties');
propertyObject.something = 5;
propertyObject.doSomething = () => {
  console.log('Look at me');
}

console.log('Object has something', propertyObject.hasOwnProperty('something'));
console.log('Object can do something', propertyObject.hasOwnProperty('doSomething'));


const card1 = {
  suit: 'clubs',
  _rank: '5',
  2: 'hi',
  get rank(){
    console.log('getting the rank');
    return this._rank;
  },
  set rank(val){
    if(typeof(val) === typeof('String')){
      this._rank = val;
    }
    else {
      this._rank = 'Zip';
    }
  }
}

console.log('card1 rank', card1.rank);
card1.rank = '7'
console.log('card1', card1.rank);
card1.rank = 54;
console.log('card1', card1.rank);

const prop = 'suit';

console.log('accessing with brackets', card1[[prop]]);

console.log('dots with numbers', card1[2]);