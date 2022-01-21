import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: false
    }
})

export default mongoose.model("Task", TaskSchema);
