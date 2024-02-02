const { Router } = require("express");
const Model = require("../Model/model");

const addRouter = Router();

// Route to handle adding new data
addRouter.post("/addData", async (req, res) => {
  try {
    let { fullName, phone } = req.body;
    const data = new Model({ fullName, phone });
    await data.save();
    res.status(200).send({ message: "Successfully added" });
  } catch (err) {
    console.log("error while adding data", err);
    res.status(400).send({ message: "Something went wrong" });
  }
});

addRouter.get("/getData", async (req, res) => {
  try {
    let data = await Model.find();
    res.status(200).send(data);
  } catch (err) {
    console.log("error while adding data", err);
    res.status(400).send({ message: "Something went wrong" });
  }
});

addRouter.put("/updateData", async (req, res) => {
  try {
    let { fullName, phone } = req.body;
    let data = await Model.findOneAndUpdate({$or: [{fullName: fullName}, {phone: phone}]}, {$set: {fullName: fullName, phone: phone}}, {new: true});
    console.log(data);
    res.status(200).send(data);
  } catch (err) {
    console.log("error while adding data", err);
    res.status(400).send({ message: "Something went wrong" });
  }
});




module.exports = addRouter;
