import multer from "multer"
import path from "path"

// store uploads in the public folder (relative to backend root)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(process.cwd(), "public"))
    },
    filename: (req, file, cb) => {
        // create a unique filename to avoid collisions and preserve extension
        const uniqueName = `${Date.now()}-${file.originalname.replace(/\s+/g, "_")}`
        cb(null, uniqueName)
    }
})

const upload = multer({ storage })

export default upload