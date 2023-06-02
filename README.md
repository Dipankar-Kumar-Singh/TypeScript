

# Learning Objective : 
1. To Setup / Configure TypeScript Project from start 
2. To Know Syntax of TypeScript 
4. To understand advantage of typescript
5. To understand compilation process of TypeScript and different options aval.
6. To Play with most important features of TypeScript

---

## To Setup / Configure TypeScript Project from start 

- Typescript is not easy to setup 🥲 
	- did a lot of mistakes while playing with different flags options 

to set up a new project : 

```Bash
	npm init -y 
	npm i typescript -D 
	tsc -init
```

`tsconfig.json` file is generated .. play with it .. 💫

### Most Important features / flags : 

```text
{
  "compilerOptions": {
    "target": "ESNext",                   Set the JavaScript language version for emitted JavaScript and include compatible library declarations. 
    "module": "ESNext",                   Specify what module code is generated.
    "rootDir": "./server",                Specify the root folder within your source files.
    "moduleResolution": "nodenext",       Specify how TypeScript looks up a file from a given module specifier. 
    "outDir": "./dist",                   Specify an output folder for all emitted files. 
    "esModuleInterop": true               Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports'
  }
}
```

`ESNext` ----> Latest 🔥🔥🛡️
`outdir` ---> in Dist ( distribution ) folder --> used for production shiping 
`rootDir` ---> Org Server Ts Files 

-----

Folder Structure --> ⭐ Important step 

Because it is TS ==> can't directly run on browser / or by node ..
Thus .. 

First it needs to be compiled  ... 

>[!Note] What we mean by compiled 
> It is not main.cpp file , which can be compiled into one main.a file .. 
> It is collection of Files ... I may be importing many files in Index.js --> what will happen to the relative locations ?? 
> Ans : Compiler of TS will generate a COPY of FULL FOLDER Structure of Folder so that No import breaks , all relative path will work fine .. 


- Project
	- dist [ Folder ]
		- compiled items ( full dir compiled )
	- Server
		Actual Code ( TS Files )
	- -tsconfig.json
	- -package.json

----

## In Project config File : Imp Settings 

```text
{
  "scripts": {
    "start": "tsc && node ./dist/index.js",
  },
  "type": "module",
  "exports": "./dist/index.js"
}
```

Start --> `tsc` --> compiler command to compile the TS Project ( Full ) into Dist Folder 
then --> write `node ./dist/index.js`  --> normal node script 
`type : module ` --> ES6 Module ( Modern JavaScript import export statement can be used )

-----



# Datatype 

## Primitives Datatype:

- ##### string
- ##### number
- ##### boolean

## Array 

```TS
const users : string[] = ["Dipankar" , "Akash" , "Himansu" , "Ankit" , "Sammy" , "Tarun" , "Yogi" , "Sambhav" , "London" , "Pawan" , "Girish" , 
"Koi_back_toh_nahi_gaya ?? "] 

const ages: number[] = [ 20 , 21 , 20 , 23 , 55 , 6 ] ;

```

## Tuple  

it's similar to JS array , but like C++ tuple  ( Fixed !!! --> Fixed Type with fixed positions  )

```C++ 
int main(){
	tuple<int,int,string> t = {5 , 10 , "Ajay" } ;
}
```

```TS
const tuple: [number , number , string ] = [ 5 , 10 , "Ajay"]
```


## Enums ⭐⭐🤩

Enums in TypeScript are a way to define a set of named constants.

Enums ( enumerations ) provide a convenient way to work with a fixed set of values in TypeScript, making the code more readable and maintainable. it's lot better than set of const values that needs to be access again and again are in a sub group 

- They can also help to prevent errors, by ensuring that variables can only take on certain values.
- You can use the `as` keyword to cast a variable to an `enum` type. This can be useful for situations where you need to check the value of an `enum` member.

```TS
enum Direction { North, South, East, West } // by default ... 0 , 1 , 2 ,3 ........
enum Direction { North = 1, South = 2, East = 3, West = 4 } // custom values 

let userDirection: Direction = Direction.North;
if (userDirection === Direction.North) { console.log("User is moving North"); }

```


## Any 😉

Any is for making TS -> JS , It is used when we don't know the data .. 



## Objects 

Basic Skeleton can be provided to on-the-go objects .. 

```TS
const car: { type: string, model: string, year: number } = {    
 // basic def of Object given ( no need of class)
  type: "Toyota",  
  model: "Corolla",  
  year: 2009  
};
```

## Union Types

TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators.

A union type is a type formed from two or more other types, representing values that may be _any one_ of those types. 
We refer to each of these types as the union’s _members_.
```TS
// A variable can be a string or a number.
let value: string | number;

// A function can take a string or a number as an argument.
function myFunction(value: string | number) {
}

// An object can have a property that is a string or a number.
interface MyObject {
  value: string | number;
}
```

#### Problems faced by Union Type : 
##### How to determine , which fun to apply if fun is type dependent ... ? 

##### Sol : No one is King here 👑 .. ( DEMOCRACY 🤘)
==> TypeScript will only allow an operation if it is valid for _every_ member of the union. For example, if you have the union `string | number`, you can’t use methods that are only available on `string`:

###### The solution is to _narrow_ the union with code

```TS
function printId(id: number | string) {
	if (typeof id === "string") {
	// In this branch, id is of type 'string'
		console.log(id.toUpperCase());
	} else {
	// Here, id is of type 'number'
		console.log(id);
	}
}
```

>[!info] How to determine Type of Array ? 
> ==> if (Array.isArray(x))


# Type Aliases 💫💫💫💫💫 

The Structure of the Data which we want , The Kind of Data we are talking about is know as Type .. 

`boolean , number , string , object ` are data-type ( types ) available by TS / JS by default

🤩 We can make our own type ....... ( Ye .. Custom Type )

# Functions

TypeScript allows you to specify the types of both the input and output values of functions.

```TS 
function add( a : number , b : number ) : number {
	reutrn a + b ;
}
```

😯 Contextual typing for function - parameter s inferred to have type ( will give good suggestions based on datatype because now it know for sure about data type )



# Features that I loved :

- **Static typing**. TypeScript is a statically typed language, which means that the types of variables and expressions are known at compile time. This can help to prevent errors and improve the readability and maintainability of code.

- **Interfaces**. Interfaces in TypeScript can be used to define the contract for a class or function. This can help to ensure that code is consistent and reusable.

- **Classes**. TypeScript classes are more powerful than JavaScript objects. They can have constructors, properties, methods, and events.

- **Generics**. Generics in TypeScript can be used to create generic functions and classes. This can help to improve the type safety of code and make it more reusable.

- **Modules**. TypeScript modules can be used to organize code into logical units. This can help to improve the readability and maintainability of code.



