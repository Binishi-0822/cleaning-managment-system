import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    customer_name: {type: String, required: true},
    address: {type: String, required: true},
    service_id: { type: mongoose.Schema.Types.ObjectId, ref: "Booking", required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true }
},{ timestamps: true })

const Booking = mongoose.model("Booking",bookingSchema)
export default Booking