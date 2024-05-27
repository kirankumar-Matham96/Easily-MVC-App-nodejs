/** ******************************************************************
 * Execution    : 1. Default node with npm   cmd> npm start
 *                2. If nodemon installed    cmd> npm run dev
 *
 * Purpose      : To handle the file uploads
 *
 * @description
 *
 * @file        : middlewares/multer.middleware.js
 * @overview    : Handles the file uploading and storage process
 * @module      : this is necessary to upload the files
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : 1.0.0
 * @since       : 27-05-2024
 ******************************************************************** */

// imports
import multer from "multer";
import path from "path";

/**
 * Configuring multer for file handling.
 */
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
