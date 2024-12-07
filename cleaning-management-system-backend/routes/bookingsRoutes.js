import express from 'express';
import {createBooking , getAllBookings, deleteBooking, updateBooking} from '../controllers/bookingController.js'

const router = express.Router();

router.post('/bookings', createBooking);
router.get('/admin/bookings', getAllBookings);
router.delete('/admin/bookings/:_id',deleteBooking)
router.put('/bookings/:_id',updateBooking)

export default router;