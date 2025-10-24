import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

const uploadOnCloudinary = async (filepath) => {
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    try {
        if(!filepath){
            return null}
        const uploadResult = await cloudinary.uploader
        .upload(filepath)
        // remove the local file after successful upload if it exists
        try {
            if (filepath && fs.existsSync(filepath)) {
                fs.unlinkSync(filepath)
            }
        } catch (err) {
            console.error("Failed to remove temp file:", filepath, err)
        }
        return uploadResult.secure_url


        
    } catch (error) {
        // attempt to remove the temp file if it exists, but don't crash if unlink fails
        try {
            if (filepath && fs.existsSync(filepath)) {
                fs.unlinkSync(filepath)
            }
        } catch (err) {
            console.error("Failed to remove temp file after error:", filepath, err)
        }
        console.error("Cloudinary upload error:", error)
        // rethrow so callers can handle the error explicitly
        throw error
    }
}

export default uploadOnCloudinary
    
