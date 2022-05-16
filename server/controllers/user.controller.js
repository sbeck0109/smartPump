const User = require("../models/user.models");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");



//export an opject that is full of methods
module.exports = {
    create(req, res) {
        User.create(req.body)
        //get back the user that was created AND respond with json and send the user back to whoever requested it
        .then((user) => {res.json(user);
        })
        .catch((err) => {res.json(err)});

    },
    // login(req, res) {
    //     User.findOne({email: req.body.email}
    //         .then((user)=> {
    //             if (user === null) 
    //             req.status(400).json({msg: "invalid login attempt"});

    //         else {
    //             bcrypt.compare(req.body.password, user.password)
    //             .then((passwordIsValid) => {
    //                 if (passwordIsValid) {
    //                     res.cookie("usertoken, jwt.sign({id: user.id}, process.env.JWT_SECRET"), {
    //                         httpOnly: true,
    //                     }
    //                     .json({msg: "success"});
    //                 }else {
    //                     res.status(400).json({msg: "invalid login attempt"});
    //                 }
                    
    //             }
    //         },
    
    getAll(req, res) {
        User.find()
        //plural because we're finding all
        .then((users) => {res.json(users);
        })
        .catch((err) => {res.json(err)});
    },
    getOne(req, res) {
        console.log(req);
        User.findById(req.params.id)
        //send back one user, singular to requester
        .then((user) => {res.json(user);
        })
        .catch((err) => {res.json(err)});
    },
    update(req, res) {
        //run validator again and return the updated info instead of the old info
        User.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, new: true,})
        //send back one user, singular to requester
        .then((updatedUser) => {res.json(updatedUser);
        })
        .catch((err) => {res.json(err)});
    },

};