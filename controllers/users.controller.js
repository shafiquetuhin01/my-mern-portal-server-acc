module.exports.getAllUsers = (req, res, next) =>{
    res.send("All Users found")
    next();
}
module.exports.saveUser = (req, res) =>{
    res.send("Save all user")
}

module.exports.getUsersDetails = (req, res, next) => {
    res.send("Users details counted");
}