import Customers from "../models/borrowersModel.js";

export const getAllBorrowers = async () => {
    try {
        const borrowers = await Customers.find()

        res.status(200).json(borrowers)

    } catch (e) {
        res.status(500).json({ error: e.message });
    }

}

export const createNewBorrower = async () => {
    try {
        const { name, email, phone, address, borrowedItems, isActive } = req.body;

        const customer = await Customers.create({
            name,
            email,
            phone,
            address,
            borrowedItems,
            isActive,
        });
        if (customer) {
            res.json(customer);
        }

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

export const updateBorrower = async () => {
    try {

        const customer = await Customers.findById(req.params.id);
        const { name, email, phone, address, borrowedItems, isActive } = req.body;

        if (customer) {
            customer.name = name ;
            customer.email = email;
            customer.phone = phone ;
            customer.address = address ;
            customer.borrowedItems = borrowedItems;
            customer.isActive = isActive;

            const updatedUser = await customer.save();

            res.json(updatedUser);

        }
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

export const deleteBorrower = async () => {
    try {

        const borrower = await Customers.findByIdAndDelete(req.params.id)

        if (borrower) {
            res.status(200).json({message: "deleted successfully!"})
        }

       

    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}
