const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  // Defining complex schema here and using it in the userSchema
  street: String,
  city: String,
});

const userSchema = mongoose.Schema({
  // Schema of the document
  name: String,
  age: {
    type: Number,
    min: 1, // Min and max values
    max: 150,
    validate: {
      validator: v => v % 2 === 0,      // Validating age
      message: props => `${props.value} is not even`
    }
  },
  email: {
    type: String,
    minLength: 10, // Minimum length of email
    required: true, // Email should be provided
    lowercase: true, // Data will be converted into lowercase before registering in the database
  },
  createdAt: {
    type: Date,
    immutable: true, // This value will not change once created
    default: () => Date.now(), // This function will run everytime a new object is created
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(), // This function will run everytime a new object is created
  },
  bestFriend:{ 
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Users" // Refers to the Users model
  }, // Refers to a user with it's id
  hobbies: [String], // Array of strings
  address: addressSchema,
});

userSchema.methods.sayHi = function (){
  console.log(`Hi, my name is ${this.name}`);
}

module.exports = mongoose.model("Users", userSchema); // Collection will be called as "Users"
