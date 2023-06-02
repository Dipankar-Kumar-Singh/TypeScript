

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

```json
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
- `string` 
- `number`
- `boolean`

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


## Enums 

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


# Features that I loved :

