const mongoose = require('mongoose');

const transactionRoleSchema = mongoose.Schema({
    name: { type: String, required: true },
    value: { type: String, required: true },
    ref_transaction_role: { type: String, required: true },
});

const transactionRoleModel = mongoose.model("TransactionRole", transactionRoleSchema);

module.exports = transactionRoleModel;