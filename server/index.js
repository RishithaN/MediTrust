const express = require("express")
const app = express()


const cors = require("cors")

app.use(cors())

const { client } = require("./DBConnect");

app.listen(3000, () => {
  console.log("app listening on port 3000")
});


app.get("/", function(req, res) {
    res.send("It's working!")
});


app.post("/medicineDetails" , function(req , res) { 
    medid = 123456789//req.body.medid

    client.query('SELECT * from medicines where medid = $1' , [medid], (err, result) => {
      
        if(err){
            throw err;
        }
        else{
    
          res.send({sending_details : result})
    
    
        }
    
      })
});



app.post("/login", function(req, res) {

    const email = req.body.email
    const pwd = req.body.password

    console.log(email , pwd)


    var status = "fail"
    var role = 0;

    client.query('SELECT * from users where email = $1 and password = $2' , [email , pwd], (err, result) => {
        
        if(err){
            throw err;
        }
        else{

          console.log(result)

            if(result.rowCount === 1){
                status = "success";
                console.log("hey heree");
                role = result.rows[0].category;

            }

        }

        console.log(status);
        res.send({sending : status , rolee : role})

      })

    
});



      app.post("/signup" , function(req , res) { 

        console.log("hello")

        const email = req.body.email_user
        const password = req.body.password_user
        const mobile = parseInt(req.body.mobile_user)
        const name = req.body.name_user
        const role = parseInt(req.body.role_user)


        console.log(role)


        var status = "success"
        var roleCheck = 0;
    
        client.query('SELECT * from users where email = $1 or mobile = $2' , [email , mobile], (err, result) => {
          
            if(err){
                throw err;
            }
            else{
        
              if(result.rowCount != 0){
                    status = "fail"
              }
              else{

                client.query('insert into users(name , password , mobile , email , category) values($1 , $2 , $3 , $4 , $5)' , [name , password , mobile , email , role] , (err , result) => {

                    if(err){
                        throw err;
                    }

                    else{
                        if(result.rowCount === 1){
                            status = "success"
                            roleCheck = role
                        }
                    }

                });

              }
              
              console.log(status);
              res.send({sending : status , rolee : roleCheck})
        
            }
        
          })
    });



    app.post("/pharmacyDetails" , function(req , res) {

        const medid = 123456789//req.body.medid;

        var status = "none"


        client.query('SELECT * from pharmacy where pharmid in (select pharmid from availability where medid = $1) ' , [medid], (err, result) => {
          
            if(err){
                throw err;
            }
            else{
        
              if(result.rowCount != 0){
                  
                status = "yes"
              }
              

              console.log(status);
              res.send({sending : status , result : result.rows})
              
        
            }
        
          })

    });

    

    app.get("/doctors" , function(req , res) {



        client.query('SELECT * from doctors', (err, result) => {
          
            if(err){
                throw err;
            }
            else{
        
              res.send({result_data : result})
              
        
            }
        
          })


        



    });