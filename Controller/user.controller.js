const cloudinary = require('cloudinary').v2;
require('dotenv').config();
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const uploadedImages = []; // Store image URLs in memory

const uploadFile = (req, res) => {
    let media = req.body.file;
    cloudinary.uploader.upload(media, { resource_type: "auto" }, (err, result) => {
        if (result) {
            uploadedImages.unshift(result.secure_url); // Save the URL
            res.send({ url: result.secure_url }); // Send as object for frontend
            console.log(result.secure_url);
        } else {
            console.log(err);
            res.status(500).send('Upload failed');
        }
    })
}

const getImages = (req, res) => {
    res.json(uploadedImages); // Return all image URLs
}

module.exports = {
    uploadFile,
    getImages
}