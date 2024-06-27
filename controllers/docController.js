const path = require('path')

exports.viewPage = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','doc.html'))
}