# Chat Application
Node Chat App

*project structure*

```
.
|
|
└────── src
│       |
|       |── angular /*client files*/
|       |
|       |── config
|       │       ├── config.json /*dev,test,production*/
|       |       |
|       │       └── environment.js  
|       |
|       └── controllers 
|       │       ├── users.js  
|       │       └── chat.js        
|       |
|       ├── middleware
|       │     ├── auth.js
|       │     ├── error-handler.js
|       │     └── request-handler.js
|       |
|       ├── models
|       │     ├── users.js 
|       │     └── chat.js
|       |
|       ├── routes
|       │     ├── users.js 
|       │     └── chat.js
|       |
|       └── server.js
|── index.js
|
├── README.md
|
└── package.json

```
---

*Run server*

* sudo NODE_ENV=development npm start || sudo NODE_ENV=development node app.js
