const express = require("express");

const Athlete = require("../models/athlete");

const router = new express.Router();

router.post("/athletes", async (req, res) => {
  const athlete = new Athlete(req.body);

  try {
    await athlete.save();

    res.send(athlete);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/athletes", async (req, res) => {
  try {
    // 1st => Method
    // const athletes = await Athlete.find({ sport: "tennis" })
    //   .select("name age")
    //   .limit(1)
    //   .sort({ createdAt: -1 });

    // 2nd => Method
    // const athletes = await Athlete.find()
    //   .where("sport")
    //   .equals("tennis")
    //   .where("age")
    //   .gte(18)
    //   .lte(26)
    //   .limit(5)
    //   .sort({ createdAt: -1 })
    //   .select("name age");

    // 3rd => Method
    // const athletes = await Athlete.find({
    //   sport: "baseball",
    // }).select("name sport");

    // const athletes = await Athlete.find({
    //   sport: { $in: ["baseball", "tennis", "football"] },
    // }).select("name sport");

    // const idList = ["5f8adb0efe4de03e643e56b7", "5f8adb1afe4de03e643e56b8"];
    // const athletes = await Athlete.find({
    //   _id: { $in: idList },
    // }).select("name sport");

    // const athletes = await Athlete.find({
    //   $or: [
    //     { _id: "5f8adb0efe4de03e643e56b7" },
    //     { _id: "5f8adb1afe4de03e643e56b8" },
    //   ],
    // }).select("name sport");

    // const athletes = await Athlete.find({
    //   $or: [{ sport: "baseball" }, { sport: "cricket" }],
    // }).select("name sport");

    // const athletes = await Athlete.find()
    //   .or([{ sport: "baseball" }, { sport: "cricket" }])
    //   .select("name sport");

    // const athletes = await Athlete.find({
    //   $and: [{ age: { $gte: 24 } }, { age: { $lte: 26 } }],
    // }).select("age name");

    // const athletes = await Athlete.find()
    //   .and([{ age: { $gte: 25 } }, { age: { $lte: 26 } }])
    //   .select("name sport");

    res.send(athletes);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
