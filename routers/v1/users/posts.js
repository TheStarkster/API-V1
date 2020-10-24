const router = require("express").Router();
const RequestHandlers = require("../../../functions/posts/posts");
var multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, __dirname + "/../../../data/posts");
  },
  filename: (req, file, callback) => {
    callback(null, new Date().toISOString() + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage });

router.post("/:name/create", upload.single("file"), (req, res) =>
  RequestHandlers.createPosts(req, res)
);
router.delete("/:name/delete", (req, res) =>
  RequestHandlers.deletePost(req, res)
);

module.exports = router;
