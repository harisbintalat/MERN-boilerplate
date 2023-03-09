Do npm i in frontend as well as backend folder to install dependencies
npm run dev in frontend and backend folders to run the server

Add

    "frontend":"cd ./frontend && npm run dev",
    "backend":"nodemon ./bin/www",
    "dev": "concurrently \"npm run frontend\" \"nodemon ./bin/www\""

in the scripts in the package.json file in backend to run both server concurrently