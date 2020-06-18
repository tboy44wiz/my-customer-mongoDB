const mongoose = require('mongoose');

const deptReminderSchema = mongoose.Schema({
    ts_ref_id: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, required: true },
    publish_date: { type: String, required: true },
});

const deptReminderModel = mongoose.model("DeptReminder", deptReminderSchema);

module.exports =  deptReminderModel;