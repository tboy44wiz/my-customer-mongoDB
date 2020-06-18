const mongoose = require('mongoose');

const marketingSchema = mongoose.Schema({
    store_ref_code: { type: Number, required: true },
    message: { type: String, required: true },
    status: { type: String, required: true },
    user_ref_id: { type: String, required: true },
    publish_date: { type: String, required: true },
});

const marketingModel = mongoose.model("Marketing", marketingSchema);

module.exports = marketingModel;