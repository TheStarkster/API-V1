const Models = require(__dirname + "/../../models/Profile");
const Profile = require("../../../API-V1-master/models/Profile");

var day = new Date();

module.exports = {
  createPosts: async (req, res) => {
    var fileinfo = req.file;
    console.log(fileinfo);
    console.log(req.description);
    const Post = {
      description: req.body.description,
      likes: 0,
      image: fileinfo,
      comments: 0,
      title: req.title,
      createdAt:
        day.getDate() +
        " " +
        Number(day.getMonth() + 1) +
        " " +
        day.getFullYear(),
      status: true,
    };
    // Profile.findOneAndUpdate({ name: req.params.name }, { posts: Post });
    res.send(Post);
  },
  deletePost: async (req, res) => {
    const UserId = req.params.userId;
    Profile.findOneAndUpdate({ posts: UserId, status: false });
    res.send("Deleted Post");
  },
};
