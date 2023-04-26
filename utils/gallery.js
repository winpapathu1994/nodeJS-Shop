const fs = require('fs')
const saveFile = async(req,res,next) => {
    //console.log(req.files.file);
    let file = req.files.file;
    let filename = new Date().valueOf()+"_"+file.name
    console.log(file);
    //console.log('filename',filename);
    file.mv(`./uploads/${filename}`)
    req.imageName = filename;
    next();
    }
    
    const saveFiles = async(req,res,next) => {
        let filenames = [];
        let files = req.files.files;
        console.log("files", files);
        files.forEach((file) => {
            let filename = new Date().valueOf()+"_"+file.name;
            file.mv(`./uploads/${filename}`);
            filenames.push(filename);
        });
       console.log('reqbody', req.body)
       req.body["images"] = filenames.join(',');
        next();
        }

const deleteFile = async(filename) => {
    console.log('filename',filename);
    await fs.unlinkSync(`./uploads/${filename}`);
}
        
module.exports = {
    saveFile,
    saveFiles,
    deleteFile
}