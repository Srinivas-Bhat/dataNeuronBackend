const mongoose=require('mongoose');


const entrySchema = new mongoose.Schema({
    // Define your schema fields
    // Example: name: String, age: Number, etc.
    // Adjust this based on your specific data structure
    fullName: String,
    phone: String
});

const Entry = mongoose.model('data', entrySchema);



module.exports=Entry;