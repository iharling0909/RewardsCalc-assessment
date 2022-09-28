const express = require('express');
const Transaction = require('../../models/Transaction');
const router = express.Router();

// @route    GET api/drinks
// @desc     Gets all drinks
// @access   Public
router.get(
  '/',
  async (req, res) => {
    const transactions = await Transaction.find();
    console.log(transactions);
    res.send({
      transactions
    });
  }
);

const calcRewards = (purchase) => {
  let twoPoints = purchase - 100, onePoint = purchase - 50;
  twoPoints = twoPoints > 0 ? twoPoints : 0;
  onePoint = onePoint <= 50 ? onePoint : 50;
  onePoint = onePoint > 0 ? onePoint : 0;
  return twoPoints * 2 + onePoint * 1;
}

const indexes = ["first", "second", "third"];

router.get(
  '/calc',
  async(req, res) => {
    const transactions = await Transaction.find();
    let result = [], i, j;
    for(i = 0; i < transactions.length; i ++){
      const rewards = calcRewards(transactions[i].purchase);
      for(j = 0; j < result.length; j ++){
        if(transactions[i].name == result[j].name){
          result[j][indexes[transactions[i].month - 1]] += rewards;
          result[j]['total'] += rewards;
          break;
        }
      }
      if(j === result.length){
        result[result.length] = {
          ...{
            name: transactions[i].name,
            first: 0,
            second: 0,
            third: 0,
            total: 0
          }, 
          [indexes[transactions[i].month - 1]] : rewards,
          total: rewards
        }
      }
      console.log(indexes[transactions[i].month - 1]);
      console.log(result);
    }

    res.json(result);
  }
);

module.exports = router;
