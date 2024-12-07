import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name: {type: String, required: true},
})

const User = mongoose.model("Service",serviceSchema)
export default User