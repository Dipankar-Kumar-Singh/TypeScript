// import { data } from  "./Data/database.js";

// data.forEach( d => console.log(d)) ;

let sales: number = 12_34_14;
let course: string = 'Dipankar Kumar Singh';
let is_published: boolean = true;

// Any ..  --> Generic

// Array
let numbers: number[] = [1, 2, 5];

// Touples
let users: [number, string] = [1, 'Dipankar'];

// Enums --> Grouping enums

// const small = 1
// const Medium = 2
// const large = 3

enum Size {
	Small = 'S',
	Medium = 'MS',
	Large = 'SF',
}

const BBB = 234 ;
// By default ..... 0 , 1 , 2 , 3 .... + 1 from previous
// enum Size { Small , Medium , Large }
// enum Size { Small , Medium , Large }

let mySize: Size = Size.Large;


/////////////////////////////////////////////////////////////
// Default Value 
function calculateArea(size : number = 200) : number {
    const area = size * size  ;
    return area ;
}

// Can be undefined ... size can be undefines .. we are allowin it 
function calculateArea3(size? : number ) : number {
    const len = size ?? 0 ;
    const area = len * len  ;
    return area ;
}




export {};