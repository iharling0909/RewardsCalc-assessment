const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const Transaction = require('../models/Transaction');

const transactionData = [
  {
    id: 1,
    name: 'Monster', 
    month: 1, 
    purchase: 200
  },{
    id: 2,
    name: 'Monster', 
    month: 2, 
    purchase: 200
  },{
    id: 3,
    name: 'Monster', 
    month: 3, 
    purchase: 200
  },{
    id: 4,
    name: 'Wa', 
    month: 3, 
    purchase: 200
  },{
    id: 5,
    name: 'Wa', 
    month: 2, 
    purchase: 200
  },{
    id: 6,
    name: 'BB', 
    month: 1, 
    purchase: 200
  },
];

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...');

    const transaction = await Transaction.find();
    if (transaction.length == 0)
    {
      for (let i = 0; i < transactionData.length; i ++) {
        const transaction = new Transaction({
          id: transactionData[i].id,
          name: transactionData[i].name,
          month: transactionData[i].month,
          purchase: transactionData[i].purchase
        });
        transaction.save();
      }
    }
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
