const mongoose = require("mongoose");
const Users = require("./Users")

mongoose.connect("mongodb://localhost/testing",() => { console.log("Connected"); },(e) => {console.log(e);});

async function run(){

     // Always add try catch to catch errors precisely
    try {
        

        // const user = await Users.create({
    
        //     name: "Vishv",
        //     age: 10,
        //     email: "vishv10@gmail.com",
        //     hobbies: ["Travelling", "Cricket"],
    
        // })

        //todo Search for the user with ID and other params
        // const user = await Users.findById("6388ce0b2fe3352436f88e2a") 
        // const user = await Users.find({ name: "Vishv"}) 
        
        //todo Filters to find the document

        // const user = await Users.where("age").gt(15) //* Returns user greater than age 15
        // const user = await Users.where("name").equals("Vishv").where("age").lt(15) // Chain the wheres
        // const user = await Users.where("name").equals("Vishv").where("age").lt(15).select("age") // Display the age
        const user = await Users.findOne({name: "Vishv"})
        user.sayHi()

        
        
        
    //    console.log(user)

    } catch (error) {
        
        console.log(error.message)

    }

}
run()