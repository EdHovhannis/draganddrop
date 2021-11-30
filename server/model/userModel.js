import mongoose from 'mongoose';

const User = new mongoose.Schema({
    name: {type: String, required: true},
    lastName: {type: String, default:''},
    email: {type: String, required: true, unique: true}, 
    password: {type: String, required: true},
    image: {type: String, default: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-256.png"}, 
    isAdmin: {type: Boolean, required: true, default: false}
})

export default mongoose.model("User", User);