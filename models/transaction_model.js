const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    ts_ref_id: { type: String, required: true },
    user_ref_id: { type: String, required: true },
    store_ref_code: { type: String, required: true },
    ref_transaction_role: { type: String, required: true },
    customer_ref_code: { type: String, required: true },
    amount: { type: Number, required: true },
    total_amount: { type: Number, required: true },
    interest: { type: String, required: true },
    expected_pay_date: { type: String, required: true },
    description: { type: String, required: true },
});

const transactionModel = mongoose.model("Transaction", transactionSchema);

module.exports =  transactionModel;