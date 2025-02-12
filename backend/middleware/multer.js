import multer from "multer";
const multerUpload = multer({
  limits: {
    fileSize: 1024 * 1024 * 500000,
  },
});

const attachmentsMulter = multerUpload.single("file");

export { attachmentsMulter };
