/*************************
*  This is a PURE function 
***************************/

const add = (x,y) => x + y;

add(2,3) === 5; // Referentially transparent


/*************************
*  This is an IMMPURE function 
***************************/
let name = 'Jeremy'; // name can be changed ... which makes it mutable
// any other function using name will be mutable and an immmpure function

const getName = () => name; // depends on the global state

const setName = (newName) => {
    name = newName;
} // this function mutates the state of name which makes it immpure

const printUpperName =() => {
    console.log(name.toUpperCase());
}; // This is immpure 

/*************************
*  This is a Pure function 
***************************/

const upperName =(name) => name.toUpperCase();

describe('api', () => {
    it('returns an uppercase name', () => {
        expect(upperName('Jeremy')).to.equal('JEREMY');
        expect(upperName('Jet')).to.equal('JET');
    });
});

/*************************
*  This Imperative programming
*  We are telling the computer what to do.
* kind of hard to read
***************************/
function doubleNumbers(numbers){
    const doubled =[];
    const l = numbers.length;

    for(let i = 0; i < l; i++){
        doubled.push(numbers[i] * 2);
    }

    return doubled;
}
doubleNumbers([1,2,3])
// [2,4,6]

/*************************
*  This Declartive programming
*  We are telling the computer what we want.
*  Easy to read ex: sql, html is declarative
***************************/

function doubleNumber2(numbers){
    return numbers.map(n => n*2);
}
doubleNumbers2([1,2,3])
// [2,4,6]

/*************************
 * Mutable & Immutable
*  Protect the state of data
*  prevents data from being mutated
*  
***************************/
//Example Mutable
const hobbies1=[
    'programming',
    'reading',
    'music'
];

const firstTwo1 = hobbies.splice(0,2);
// if you made a mistake and used the splice method instead of slice
// it will mutate the state of hobbies1
console.log(firstTwo1)
// Output ['programming','reading',]


console.log(hobbies)
// Output ['music']

//Example Immutable
const hobbies = Object.freeze([
    'programming',
    'reading',
    'music'
]);

const firstTwo = hobbies.splice(0,2);
// if you made a mistake and used the splice method instead of slic
// it will throw a TypeError
// the data from data is protected because iti s immutable


/*************************
 * Mutable & Immutable 
*  
***************************/
//Mutable Example

class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    moveBy(dx,dy) {
        this.x += dx;
        this.y += dy;
    }
}

const point = new Point (0,0);

point.moveBy(5,5);
point.moveBy(-2,2);

console.log([point.x, point.y])
//[3,7]
// Oh no! the data's state has been mutated from [0,0] to [3,7]


// Immutable 
const createPoint = (x,y) => Object.freeze([x,y]);

const movePointBy = ([x,y], dx,dy ) => {
    return Object.freeze([x + dx, y + dy ]);
};

let point1 = createPoint(0,0);
// this not protected with out mutation 

point1 = movePointBy(point, 5,5);
point = movePointBy(point, -2, 2);
console.log(point)
//[3,7]

/*************************
 * Closures
*  
***************************/
//Example of a closure

const creatAdder = (x) =>{
    return (y) => x + y;
};

const add3 = creatAdder(3);
// it remembers the first created number
// that is why its is a closure
// we can reuse it over again

add3(2) === 5;
add3(3) === 6;

// closure can reduce duplications 
// Time 30 min mark