var mongoose=require("mongoose")
const list=new mongoose.Schema({
    _id: String,
name:{type:String,required:true},
age:Number,
favoriteFoods:[String]
})
var List=mongoose.model("List",list)
module.exports=List
