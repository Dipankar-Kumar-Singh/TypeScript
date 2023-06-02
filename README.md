

# Learning Objective : 
1. To Setup / Configure TypeScript Project from start 
2. To Know Syntax of TypeScript 
4. To understand advantage of typescript
5. To understand compilation process of TypeScript and different options aval.
6. To Play with most important features of TypeScript


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

```JSON
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