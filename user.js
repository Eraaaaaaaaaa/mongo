const mongoose= require('mongoose')

//krijimi i modelit
const UserSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    name: {type: String, required: true, unique: true},
})

const User = mongoose.model("User", UserSchema);
module.exports= User;