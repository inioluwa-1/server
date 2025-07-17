const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: "dtwe3klnh",
    api_key: "558726447181529",
    api_secret: "PihKrlDOjNiaqDXCICzQYHq_jG0",
})


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