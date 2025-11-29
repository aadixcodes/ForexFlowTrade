import { v2 as cloudinary } from 'cloudinary';




const  CLOUDINARY_CLOUD_NAME ="dpcezkjqc"
const  CLOUDINARY_API_KEY = "365777137983628"
const  CLOUDINARY_API_SECRET = "BlOUdvy2oI0UgY1QSHOUPbK98Yg"

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
});

export default cloudinary; 