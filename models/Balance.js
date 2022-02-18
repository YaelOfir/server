import mongoose from "mongoose";
const { Schema } = mongoose;

const balanceSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  expenseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Expense",
  },
  endOfMonthBalance: {
    type: Number,
  },
  salary: {
    salaryDate: {
      type: Date,
    },
    salaryAmount: {
      type: Number,
    },
  },
  currentBalance: {
    type: Number,
  },
});

module.exports = mongoose.model("Balance", balanceSchema);
