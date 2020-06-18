const mongoose = require('mongoose');

const roleSchema = mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
});

const roleModel = mongoose.model("Role", roleSchema);

module.exports = roleModel;