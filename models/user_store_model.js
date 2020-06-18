const mongoose = require('mongoose');

const userStoreSchema = mongoose.Schema({
    user_ref_id: { type: String, required: true },
    store_ref_code: { type: String, required: true },
});

const userStoreModel = mongoose.model("UserStore", userStoreSchema);

module.exports =  userStoreModel;