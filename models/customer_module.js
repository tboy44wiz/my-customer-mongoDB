const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    customer_ref_id: { type: String, required: true },
    store_ref_code: { type: String, required: true },
    name: { type: String, required: true },
    phone_number: { type: String, required: true },
});

const customerModel = mongoose.model("Customer", customerSchema);

module.exports =  customerModel;