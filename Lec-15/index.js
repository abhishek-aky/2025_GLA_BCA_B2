const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/GLAidators").then(()=>{
    console.log(`MongoDB connected successfully`);
}).catch((err)=>{
    console.log("Connection Failed : ", err);
})
const studentSchema = new mongoose.Schema({
    name:String,
    age:Number,
    Course:String,
    Grade:Number
})
const Student = new mongoose.model("Student", studentSchema);
async function saveHoja(){
    const s1 = new Student({
    name:"Abhishek",
    age:24,
    Course:"B.Tech",
    Grade:7.4
})
    await s1.save();
    console.log("Data Inserted Successfully");
    const data = await Student.find();
    console.log("Data is : ", data);
}
saveHoja();