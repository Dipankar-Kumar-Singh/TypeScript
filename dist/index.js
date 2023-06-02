import { data } from "./Data/database.js";
data.forEach(d => console.log(d));
let sales = 123414;
let course = 'Dipankar Kumar Singh';
let is_published = true;
// Any ..  --> Generic
// Array
let numbers = [1, 2, 5];
// Touples
let users = [1, 'Dipankar'];
// Enums --> Grouping enums
// const small = 1
// const Medium = 2
// const large = 3
//PascalCase
var Size;
(function (Size) {
    Size["Small"] = "S";
    Size["Medium"] = "MS";
    Size["Large"] = "SF";
})(Size || (Size = {}));
// By default ..... 0 , 1 , 2 , 3 .... + 1 from previous
// enum Size { Small , Medium , Large }
// enum Size { Small , Medium , Large }
let mySize = Size.Large;
