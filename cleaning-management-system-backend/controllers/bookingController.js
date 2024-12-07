import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
    const { customer_name, address,service_id, user_id } = req.body;
    
    try {
        const newBooking = new Booking({
            customer_name: customer_name,
            address: address,
            service_id: service_id,
            user_id: user_id
        });

        await newBooking.save();
        res.status(201).json({ message: "Crate new booking successfully" });

    } catch (error) {
        console.error("Error during booking creation:", error);
        res.status(500).json({ error: "Failed to create a new booking" });
    }
};

export const getAllBookings = async (req, res) => {
    try{
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    }catch(error){
        console.error("Error fetching booking",error);
        res.status(500).json({error: "Failed to fetch bookings"});
    }
}

export const deleteBooking = async (req, res) => {
    const { _id } = req.params;

    const bookingId = _id.trim();
    
    try {
        const deletedBooking = await Booking.findByIdAndDelete(bookingId);

        if (deletedBooking) {
            res.status(200).json({ message: "Booking deleted successfully" });
        } else {
            res.status(404).json({ message: "No booking found with the given ID" });
        }
    } catch (error) {
        console.error("Error deleting booking:", error);
        res.status(500).json({ error: "Failed to delete booking" });
    }
};

export const updateBooking = async (req, res) => {
    const { _id } = req.params; 
    const updates = req.body; 

    try {
        const updatedBooking = await Booking.findByIdAndUpdate(
            updates,        
            { new: true }   
        );

        if (updatedBooking) {
            res.status(200).json({
                message: "Booking updated successfully",
                updatedBooking,
            });
        } else {
            res.status(404).json({ message: "No booking found with the given ID" });
        }
    } catch (error) {
        console.error("Error updating booking:", error);
        res.status(500).json({ error: "Failed to update booking" });
    }
};