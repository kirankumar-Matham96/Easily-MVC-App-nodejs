import multer from "multer";
import path from "path";

const resumeFolderPath = path.join(path.resolve(), "public", "files");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, resumeFolderPath);
  },
  filename: (req, file, cb) => {
    const fileName = Date.now() + "-" + file.originalname;
    cb(null, fileName);
  },
});

export const uploadFile = multer({ storage: multerStorage });
