//Installing and setting up Mongoose:

var mongoose = require("mongoose");
var List = require("./appSchema")
main().then(() => { console.log("connexion established") }).catch(err => console.log(err));

async function main() {

    let person = new List({_id:"1", name: "Aymen", age: 26, favoriteFoods: ["spaghetti"] })
    let restOfList = require("./Persons");// console.log(restOfList)
  
    await mongoose.connect('mongodb+srv://aymenob:aymenobbarule10@favouritefood.penucox.mongodb.net/?retryWrites=true&w=majority');

    //1_____________________Create and Save a Record of a Model:

   // await person.save().then(()=>{console.log("it was saved")}).catch((err)=>{console.log(err)})

    //2_____________________Create Many Records with model.create():

    //await List.create(restOfList).then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})

    //3____________________Use model.find() to Search Your Database:

    //await List.find({name:"Hatem"}).lean().then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})

    //4____________________Use model.findOne() to Return a Single Matching Document from Your Database:

   // await List.find({favoriteFoods:"chocolate"}).lean().then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})

    //5___________________Use model.findById() to Search Your Database By _id:

    //await List.findById("4").lean().then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})

    //6____________________Perform Classic Updates by Running Find, Edit, then Save

     /*await List.findOne( { _id:"4"},function (err,result) {
        if (err){console.log(err)}
    else {
            result.favoriteFoods.push("hamburger")
            result.save().then(data => console.log(data.toJSON())).catch(err => console.log(err))
            
        }
    })*/

    //7___________________Perform New Updates on a Document Using model.findOneAndUpdate():

    /*await List.findOneAndUpdate({name:"salim"},{$set:{age:20}},{ new: true },function (err,data) {
        err? console.log(err):console.log(data.toJSON())
    })*/
    
    //8____________________Delete One Document Using model.findByIdAndRemove

    /*await List.findByIdAndRemove("11",function (err,data) {
        err? console.log(err):console.log(data)
    }).lean()*/

    //9___________________MongoDB and Mongoose - Delete Many Documents with model.remove()

    /*await List.remove({name:"Mary"},function (err,data) {
        err? console.log(err):console.log(data)
    }).lean()*/

    //10___________________Chain Search Query Helpers to Narrow Search Results

    await List.find({favoriteFoods:'burritos'}).lean().limit(2).select('age').sort({name:1}).exec((err,result)=>{err? console.log(err):console.log(result)})

    await List.find({}).lean().then((data) => { console.log(data) })
}
//List.collection.update({name:"Rana"},{$set:{favoriteFoods:["chocolate"]}})
//List.deleteOne({name:"Aymen"}).then()
//List.collection.drop()
