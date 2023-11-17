import multer from 'multer';
import ErrorResponse from '../errors/errorHandler.js';

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFormats = ['image/png', 'image/jpeg', 'image/jpg'];

  if (allowedFormats.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new ErrorResponse(400, 'Invalid file format. Only PNG, JPEG, and JPG formats are allowed.'), false);
  }
};

const upload = multer({
  storage: storage,
  array: true,
  fileFilter: fileFilter,
});

export default upload;