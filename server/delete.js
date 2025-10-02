import cloudinary from "./lib/cloudinary.js";
const uploadedImage = await cloudinary.uploader.upload(
  "https://res.cloudinary.com/dmo4aqw7c/image/upload/v1759341111/g5brllmkfhytwwnj7o2r.jpg"
);
const publicId = uploadedImage.public_id; // replace with your image public ID

cloudinary.uploader.destroy(publicId, function (error, result) {
  if (error) {
    console.error("Error deleting image:", error);
  } else {
    console.log("Deletion result:", result);
  }
});
