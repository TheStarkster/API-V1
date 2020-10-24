const Profile = require("../../models/Profile");
module.exports = {
  handleGet: (req, res) => {
    res.send("accepted response");
  },
  handlePost: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(req.body.password, salt);
      const newUser = new Profile({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: hashPassword,
      });
      newUser.save((err) => {
        if (!err) {
          console.log("Addition sucessful");
        } else {
          console.log(err);
        }
      });
      res.send(newUser);
    } catch {
      res.status(500).send();
    }
  },
  handleDelete: (req, res) => {
    jwt.verify(req.token, "secretkey", (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const newUser = req.params.userId;
        console.log(newUser);
        Profile.deleteOne({ _id: newUser }).then((u) => {
          res.send("User Deleted");
        });
      }
    });
  },
  handleUpdate: (req, res) => {
    jwt.verify(req.token, "secretkey", (err, authData) => {
      if (err) {
        console.log(err);
      } else {
        const type = req.params.type;
        const newUser = req.params.userId;
        if (type === "user") {
          Profile.updateOne({ _id: newUser }, { name: "Sneha" }, (err) => {
            if (err) {
              console.log(err);
            } else {
              res.send("Updated");
            }
          });
        } else if (type === "password") {
          Profile.updateOne({ _id: newUser }, { password: "xyzabc" }, (err) => {
            if (err) {
              console.log(err);
            } else {
              res.send("Password Updated");
            }
          });
        }
      }
    });
  },
  handleLogin: (req, res) => {
    Profile.findOne({ name: req.body.name }, (err, foundUser) => {
      if (err) {
        console.log(err);
      } else {
        console.log(req.body.password);
        console.log(foundUser);
        if (!foundUser) {
          return res.status(400).send("Cannot find user");
        } else {
          bcrypt.compare(req.body.password, foundUser.password, function (
            err,
            result
          ) {
            if (result) {
              console.log("Success");
              jwt.sign({ foundUser }, "secretkey", (err, token) => {
                const Bearertoken = token;
                res.json(token);
              });
            } else {
              res.send("Noo");
            }
          });
        }
      }
    });
  },
};
