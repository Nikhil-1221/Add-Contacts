// Testuser1221 - @Testuser1221

import express from "express";
import mongoose from "mongoose";
import { Contact } from "./ContactModal.js";
import bodyParser from "express";
import cors from "cors"

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin:true,
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
}))
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is runing on port ${PORT}`));

mongoose.connect(process.env.MONGO_URI||"mongodb+srv://Testuser1221:%40Testuser1221@cluster0.a0ed4f4.mongodb.net/",{ dbName: "Add_contact" })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// mongoose
//   .connect(
//     "mongodb+srv://Testuser1221:%40Testuser1221@cluster0.a0ed4f4.mongodb.net/",
//     { dbName: "Add_contact" }
//   )
//   .then(() => console.log("Mongodb is connected...."))
//   .catch((err) => console.log(err));

// get all contact

app.get("/", async (req, res) => {
  try {
    let contact = await Contact.find().sort({createdAt:-1});
    res.json({ message: "All Contacts", contact });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Add contacts
app.post("/", async (req, res) => {
  const { name, gmail, phone } = req.body;
  try {
    let contact = await Contact.findOne({ gmail });
    if (contact) return res.json({ message: "Contact already exist." });
    contact = await Contact.create({ name, gmail, phone });
    res.json({ message: "Contact Saved Successfully..", contact });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Edit Contact
app.put("/:id", async (req, res) => {
  const id = req.params.id;
  const updatedData = await req.body;

  try {
    let contact = await Contact.findById(id)
    if (!contact) {
      res.json({ message: "Contact not exist..." });
    }
    let data = await Contact.findByIdAndUpdate(id, updatedData, { new: true });
    res.json({ message: "Contact has been updated..!", data });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Delete contact
app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  
  try {
    let contact = await Contact.findById(id);
    if (!contact) {
      res.json({ message: "Contact not exist..." });
    }
    await contact.deleteOne();
    res.json({ message: "Contact has been deleted.." });
  } catch (error) {
    res.json({ message: error.message });
  }
});


