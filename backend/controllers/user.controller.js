const mongoose = require("mongoose");
const User = require("../models/user.model");

const responseHandler = require("../utils/response");
const userRoles = require("../utils/userRoles");

exports.getDoctorsForSidebar = async (req, res) => {
  try {
    await User.find({ role: "doctor" })
      .select("-password")
      .sort({ _id: -1 })
      .then((result) => {
        res.status(200).json({ result });
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getUsersForSidebar = async (req, res) => {
  try {
    await User.find({ role: "user" })
      .select("-password")
      .sort({ _id: -1 })
      .then((result) => {
        console.log(result);
        res.status(200).json({ result });
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getUserRole = async (req, res) => {
  try {
    res.status(200).json({ role: req.user.role });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getUsers = async (req, res) => {
  try {
    await User.find()
      .then((results) => {
        return responseHandler.success(res, results);
      })
      .catch((error) => {
        return responseHandler.error(res, error);
      });
  } catch (error) {
    return responseHandler.serverError(res);
  }
};

exports.makeAdmin = async (req, res) => {
  const {
    params: { id },
  } = req;

  try {
    await User.findById(id).then((results) => {
      const updatedUserToAdmin = results;

      updatedUserToAdmin.role = userRoles.ADMIN;

      User.findByIdAndUpdate(id, updatedUserToAdmin, { new: true })
        .then((results) => {
          return responseHandler.success(res, results);
        })
        .catch((error) => {
          return responseHandler.error(res, error);
        });
    });
  } catch (error) {
    return responseHandler.serverError(res);
  }
};

/*const User = require("../models/user.model");

exports.getUsersForSidebar = async (req, res) => {
  try {
    //const loggedInUserId = req.user._id;
    const filteredUsers = await User.find();

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};*/
