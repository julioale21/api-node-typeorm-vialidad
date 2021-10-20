# api-node-typeorm-vialidad


  - npm init -y     // crear el package.json
  - npm i express   // instalar modulo express
  - Agregar .gitignore
  - npm i typescript -D  // instalar typescript como dependencia de desarrollo
  - npm i @types/express -D  // instalar los types de express
  - npm i morgan cors       // morgan permite monitorizar las peticiones por consola, cors es para habilitar los recursos de origen cruzado
  - npm i @types/morgan @types/cors     // instalar los types de morgan y cors
  
  // instalar el orm
  
  - npm i typeorm
  - npm install reflect-metadata --save
  - npx tsc --init     // crear archivo de configuracion de typescript
  
  
  // agregar en tsconfig.json
     "lib": ["ES5", "ES6", "DOM"], 
     
     "outDir": "./dist",
     "rootDir": "./src",  
     
     "moduleResolution": "node",
     "experimentalDecorators": true,               
     "emitDecoratorMetadata": true
     
  // agregar al ormconfig.json
    "entities": ["dist/entity/**/*.js"],
    "synchronize": true
    
- npm install @types/node --save-dev
- npm install mysql --save

en tsconfig.json
   "strictPropertyInitialization": false, 

crear carpeta controllers
agregar user.controller.ts


en package.json

"build": "tsc"
"start": "node dist/index.js"


Agregar encriptacion

npm i bcrypt
npm i @types/bcrypt

npm i jsonwebtoken
npm i @types/jsonwebtoken



