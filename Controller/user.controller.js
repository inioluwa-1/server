const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret
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