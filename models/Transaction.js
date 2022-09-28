const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  month: {
    type: Number,
    required: true
  },
  purchase: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('transaction', TransactionSchema);
