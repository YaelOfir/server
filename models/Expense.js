import mongoose from "mongoose";
const { Schema } = mongoose;

const expenseSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  expenseAmount: {
    type: Number,
  },
  expanseDate: {
    type: Date,
  },
  expanseDescription: {
    type: String,
  },
});

module.exports = mongoose.model("Expense", expenseSchema);
