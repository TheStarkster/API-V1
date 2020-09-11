const Profile = require('../../models/Profile')

module.exports ={ 
    handleGet : (req,res)=>{
              res.send('accepted response')
    },
    handlePost : (req,res) => {
       
            const newUser = new Profile ({
                name : req.body.name,
                phone: req.body.phone,
                email:req.body.email,
                password:req.body.password
            })
            newUser.save((err)=>{
                    if(!err){
                       console.log('Addition sucessful')
                    }
                   else { console.log(err)}
                     
            })
            res.send(newUser)

    },
    handleDelete : (req,res)=>{
                const newUser = req.params.userId
                console.log(newUser)
                Profile.deleteOne({_id:newUser}).then(u=>{
                         res.send('User Deleted')
                })

        },
    handleUpdate:(req,res)=>{
            const type = req.params.type
            const newUser = req.params.userId
            if(type==='user'){
               Profile.updateOne({_id:newUser},{name:'Sneha'},(err)=>{
                       if(err){
                               console.log(err)
                       }else{
                               res.send('Updated')
                       }
               })
            }else if(type==='password'){
                    Profile.updateOne({_id:newUser},{password:'xyzabc'},(err)=>{
                            if(err){
                                    console.log(err)
                            }else{
                                    res.send('Password Updated')
                            }
                    })
                }
    }
}