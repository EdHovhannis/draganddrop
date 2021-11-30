import mongoose from 'mongoose';

const Member = new mongoose.Schema({
    name: {type: String, required: true}
})

export default mongoose.model("Member", Member);