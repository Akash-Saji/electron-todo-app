# electron-todo-app
A Todo App for daily routine

### Prerequisites

- [Git](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/en/download)
- [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/)
- [Mongo Compass](https://www.mongodb.com/try/download/compass)
- [ReactJS](https://legacy.reactjs.org/docs/getting-started.html)
- [ElectronJs](https://www.electronjs.org/docs/latest)

### Steps to run the project.

- Navigate to your proffered working directory (Example: `cd Desktop/electron-todo-app`)
- Make sure you are in the expected directory (`pwd` and `ls`)
- Clone the repository using SSH (`https://github.com/Akash-Saji/electron-todo-app.git`)
- Navigate to the API (`cd electron-todo-app`)
- Install node dependencies (`npm i`)
- Run backend node  (`cd todo-frontend`,`npm nodemon app.js`)
- The app will be running on port number provided in the env file (`http://localhost:3000`)
- Run frontend react  (`cd todo-frontend`,`npm run build` ,`npm run electron`)

### Steps to build the project.

- Navigate to your proffered working directory (Example: `cd Desktop/electron-todo-app`)
- Make sure you are in the expected directory (`pwd` and `ls`)
- Clone the repository using SSH (`https://github.com/Akash-Saji/electron-todo-app.git`)
- Navigate to the API (`cd electron-todo-app`)
- Install node dependencies (`npm i`)
- Run backend node  (`cd todo-backend`,`nodemon app.js`)
- The app will be running on port number provided in the env file (`http://localhost:3000`)
- build for windows (`cd todo-frontend`,`npm run package`)
- build for mac (`cd todo-frontend`,`npm run package-mac`)
- build for linux (`cd todo-frontend`,`npm run package-linux`)

### Documentation

- Swagger based documentations are generated at `/docs` route (`http://localhost:3000/api/docs/`)

### Code formatting & best practices

- Make sure to install prettier extension on your code editor and enable format on save.
- Configure prettier as default formatter for each file type
- `.prettierrc` file is used to define the standards

### Tools used

- [NodeJS](https://nodejs.org/en/docs)
- [ExpressJS](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/docs/)
- [Swagger UI](https://www.npmjs.com/package/swagger-ui-express)
- [Swagger JS](https://github.com/Surnet/swagger-jsdoc)
- [Mongoose](https://mongoosejs.com/)
- [CORS](https://www.npmjs.com/package/cors)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [ReactJS](https://legacy.reactjs.org/docs/getting-started.html)
- [ElectronJs](https://www.electronjs.org/docs/latest)
- [Electron-packager](https://www.electronjs.org/docs/latest/tutorial/tutorial-packaging)
