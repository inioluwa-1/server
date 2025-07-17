const cloudinary = require('cloudinary').v2;
require('dotenv').config();
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const uploadFile = (req, res) => {
    let media = req.body.file;
    cloudinary.uploader.upload(media, (err, result) => {
        if (result) {
            // let mediaUpload = new userDB(media)
            // mediaUpload.save()
            // .then(()=>{
            res.send(result.secure_url)
            console.log(result.secure_url)
            // })

        } else {
            console.log(err);
        }
    })
}


module.exports = {
    uploadFile,
}