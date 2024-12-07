import Service from '../models/Service.js';

export const createService = async (req, res) => {
    const { name } = req.body;
    
    try {
        const newService = new Service({
            name: name
        });

        const serviceExists = await Service.findOne({ name });

        if(serviceExists){
            res.status(500).json({ error: "This service is already created" });
        }else{
            await newService.save();
            res.status(201).json({ message: "Crate new service successfully" });
        }

    } catch (error) {
        console.error("Error during service creation:", error);
        res.status(500).json({ error: "Failed to create a new service" });
    }
};

export const deleteService = async (req, res) => {
    const { _id } = req.params;

    const serviceId = _id.trim();
    
    try {
        const deletedService = await Service.findByIdAndDelete(serviceId);

        if (deletedService) {
            res.status(200).json({ message: "Service deleted successfully" });
        } else {
            res.status(404).json({ message: "No Service found with the given ID" });
        }
    } catch (error) {
        console.error("Error deleting Service:", error);
        res.status(500).json({ error: "Failed to delete Service" });
    }
};
