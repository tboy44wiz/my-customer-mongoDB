const mongoose = require('mongoose');

const otpSchema = mongoose.Schema({
    otp_code: { type: Number, required: true },
    user_ref_code: { type: Number, required: true },
    activated_at: { type: String, required: true },
});

const otpModel = mongoose.model("OTP", otpSchema);

module.exports = otpModel;