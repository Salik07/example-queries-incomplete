const express = require("express");

const Sale = require("../models/sale");

const router = new express.Router();

router.post("/sales", async (req, res) => {
  const sale = new Sale(req.body);

  try {
    await sale.save();

    res.send(sale);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/sales", async (req, res) => {
  try {
    // const sales = await Sale.find();

    // [
    //   {
    //     // $group: {
    //     //   _id: null,
    //     //   count: { $sum: 1 },
    //     // },
    //     // $group: { _id: "$item" },
    //     // $group: {
    //     //   _id: "$item",
    //     //   totalSaleAmount: { $sum: { $multiply: ["$price", "$quantity"] } },
    //     // },
    //   },
    //   {
    //     // $match: { totalSaleAmount: { $gte: 400 } },
    //   },
    // ]

    // [
    //   {
    //     $match: {
    //       createdAt: {
    //         $gte: new Date("2014-01-01T00:00:00.000Z"),
    //         $lt: new Date("2015-01-01T00:00:00.000Z"),
    //       },
    //     },
    //   },
    //   {
    //     $group: {
    //       _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
    //       totalSaleAmount: { $sum: { $multiply: ["$price", "$quantity"] } },
    //       averageQuantity: { $avg: "$quantity" },
    //       count: { $sum: 1 },
    //     },
    //   },
    //   {
    //     $sort: { totalSaleAmount: -1 },
    //   },
    // ]

    // [
    // {
    //   $group: {
    //     _id: null,
    //     totalSaleAmount: { $sum: { $multiply: ["$price", "$quantity"] } },
    //     averageQuantity: { $avg: "$quantity" },
    //     count: { $sum: 1 },
    //   },
    // },
    // ]

    // [{ $sort: { quantity: -1 } }]

    // [{ $skip: 5 }]

    Sale.aggregate([
      // {
      //   $group: {
      //     _id: null,
      //     totalAmount: { $sum: "$price" },
      //     count: { $sum: 1 },
      //     avgQuantity: { $avg: "$quantity" },
      //     minQuantity: { $min: "$quantity" },
      //     maxQuantity: { $max: "$quantity" },
      //   },
      // },
      // {
      //   $group: {
      //     _id: "$_id",
      //     firstSalesDate: { $first: "$createdAt" },
      //   },
      // },
      // { $sort: { firstSalesDate: 1 } },
      // {
      //   $group: {
      //     _id: "$_id",
      //     lastSalesDate: { $last: "$createdAt" },
      //   },
      // },
      // { $sort: { lastSalesDate: -1 } },
      // {
      //   $project: {
      //     createdAt: 1,
      //     item: 1,
      //     total: { $multiply: ["$price", "$quantity"] },
      //   },
      // },
      // {
      //   $project: {
      //     item: 1,
      //     total: { $subtract: [{ $add: ["$price", "$price"] }, "$quantity"] },
      //   },
      // },
      // { $project: { item: 1, total: { $divide: ["$quantity", 2] } } },
      // {
      //   $project: {
      //     item: 1,
      //     quantity: 1,
      //     qtyEq5: { $eq: ["$quantity", 5] },
      //     _id: 0,
      //   },
      // },
      // {
      //   $project: {
      //     itemDescription: { $concat: ["$item", " - ", "$item", "s"] },
      //   },
      // },
      // {
      //   $project: {
      //     item: { $toUpper: "$item" },
      //   },
      // },
      // { $project: { quantity: 1, trim: { $trim: { input: "$item" } } } },
      // {
      //   $project: {
      //     item: { $toLower: { $trim: { input: "$item" } } },
      //   },
      // },
    ]).exec((err, result) => {
      if (err) {
        return console.log("Error--", err);
      }

      console.log("Result--", result);
    });

    res.send(sales);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
