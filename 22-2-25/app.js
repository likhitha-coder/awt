const express=require('express')
var app=express()
let students =[
    {"id":"1","name":"ram","branch":"IT"},
    {"id":"2","name":"raj","branch":"CSE"}
]
 app.get("/students",(req,res)=>{
     res.json(students)
})
// app.get("/student/:id",(req,res)=>{
//     const id=req.params.id
//     let student=students.find(s=>s.id==id)
//     if(student){
//         res.status(200).json({
//             "message":"student found","student":student })
//     }
//     else{
//         res.status(404).json({"message":"student not found"})
//     }
//  })
// app.delete("/deletestudents/:id",(req,res)=>{
//     const id=req.params.id
//   let  stud=students.find(s=>s.id==id)
//   console.log(stud)
//   if(stud){
//     students=students.filter(s=>s.id!==id)
  
//     res.status(200).json({
//         "message":"deleted","student":students})
//  }
//   else{
//     res.status(404).json({"message":"student not found"})

//     }
// })

// app.post("/addstudents/:id",(req,res)=>{
//     let student=req.body
//     students.push(student)
//     res.status(200).json({
//         "message":"student added",
//         "students":students
//     })
// }
// )
app.put("/updatestudents/:id",(req,res)=>{
    const id=req.params.id,
    studentIndex=students.findIndex(s=s.id==id)
    if(studentIndex!=-1)
    {
        students[studentIndex].name=req.body.name
        students[studentIndex].branch=req.body.branch
        res.sendStatus(200).json({
            "message":"updated","students":students
        })
    }
    else{
        res.status(404).json({
            "message":"student not found"
        })
    }
})
app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000")
})