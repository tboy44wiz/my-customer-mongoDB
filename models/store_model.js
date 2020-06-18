const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
    store_ref_id: { type: String, required: true },
    store_name: { type: String, required: true },
    Phone_number: { type: String, required: true },
    tagline: { type: String, required: true },
    shop_address: { type: String, required: true },
    email: { type: String, required: true },
});

const storeModel = mongoose.model("Store", storeSchema);

module.exports = storeModel;