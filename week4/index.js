const mongoose = require('mongoose'); // Mongoose package needed
const MONGO_URI // URI for MongoDB
= 'mongodb+srv://marwansjaman_db_user:SAmvt2h0cA4g105m@cluster0.n3qhufv.mongodb.net/Employee'

const PersonSchema = new mongoose.Schema({
    // Schema for 'Person' entity (attributes + data types + whatever else)
    name: { 
        type: String, 
        required: true 
    }, 
    age: Number, 
    gender: String, 
    salary: Number 
}); 
 
const Person = mongoose.model( 
    // Put 'Person' entity in collection 'personCollection'
    'modelname', 
    PersonSchema, 
    'personCollection' 
); 
 
// Function to insert one document 
async function insertOne() { // This function is asynchronous, code isn't executed simultaneously
 
    const doc1 = new Person({ 
        name: 'NHQ', 
        age: 32, 
        gender: 'Male', 
        salary: 1234 
    }); 
 
    const savedDoc = await doc1.save(); // Save 'Person' entity to database (line execution paused until async operation completes)
 
    console.log('One document inserted'); 
    console.log(savedDoc); 
}

async function main() { 
 
    try { 
 
        await mongoose.connect(MONGO_URI); // Connect to MongoDB (line execution paused until async operation completes)
        console.log(`Connected to ${MONGO_URI}`); 
 
        await insertOne(); // Line execution paused until async operation completes
 
    } catch (err) { // If there's an error during MongoDB connection or query
 
        console.error('Error:', err);
 
    } finally {
 
        await mongoose.connection.close(); // Close MongoDB connection (line execution paused until async operation completes)
        console.log('Connection closed'); 
 
    }
}

main();