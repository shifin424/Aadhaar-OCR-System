import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file, 'file is reading');
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    console.log(file, 'in filename');
    console.log(file.originalname, 'in filename');
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage, array: true });

export default upload;