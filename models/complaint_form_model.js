const mongoose = require('mongoose');

const complaintFormSchema = mongoose.Schema({
    user_ref_id: { type: String, required: true },
    store_ref_code: { type: String, required: true },
    message: { type: String, required: true },
});

const complaintFormModel = mongoose.model("ComplaintForm", complaintFormSchema);

module.exports =  complaintFormModel;