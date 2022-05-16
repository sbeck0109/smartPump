const userController = require("../controllers/user.controller");

 //param, the app needs to be passed in // 
//export functions
module.exports = (app) => {
    app.post("/api/users", userController.create);
    // app.post("/api/users/login", userController.login);
    app.get("/api/users", userController.getAll);
    app.get("/api/users/:id", userController.getOne);
    app.put("/api/users/:id", userController.update);
    // app.put("/api/users/loggedin", userController.getLoggedInUser);
    
};


