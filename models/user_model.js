const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    user_ref_id: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone_number: { type: String, required: true },
    is_active: { type: Number, required: true },
    api_token: { type: String, required: true },
    user_role: { type: String, required: true },
});

const userModel = mongoose.model("User", userSchema);

module.exports =  userModel;