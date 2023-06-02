

# Learnig Objective : 
1. To Setup / Configure TypeScript Project from start 
2. To Know Syntax of TypeScript 
3. To understand advantage of typescript
4. To uderstand compilation process of TypeScript and different options aval.
5. To Play with most important featues of TypeScript


## To Setup / Configure TypeScript Project from start 
- Typescript is not easy to setup 🥲 
	- did a lot of mistakes while playing with differnt flags options 

to set up a new project : 
```Bash
	npm init -y 
	npm i typescript -D 
	tsc -init
```

`tsconfig.json` file is genrated .. play with it .. 💫

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
outdir --> in Dist ( distribution ) folder --> used for production shiping 


