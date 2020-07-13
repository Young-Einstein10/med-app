const { Users } = require("../models");
const {
  jwtToken: { createToken, verifyToken },
  comparePassword,
  hashPassword,
} = require("../utils");
const bcrypt = require("bcryptjs")

const signup = async (req, res) => {
  // console.log(req.body);
  try {
    const { name, email, password, address, role } = req.body;
    // Check If User Email is present in Database before Sign Up
    const userEmail = await Users.findOne({
      where: { email}
    })

    if(userEmail) {
      res.status(400).json({
        status: "error",
        message: "User Email Already Registered",

      })
    }

    const hash = hashPassword(password);
    const user = await Users.create({
      name,
      email,
      password: hash,
      address,
      role,
    });
    const token = createToken(user);
    const { id } = user;
    return res
      .status(201)
      .json({ token, user: { id, name, email, address, role } });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password,  } = req.body;
        
    const user = await Users.findOne({
      where: {
        email
      }
    })
    console.log(user);
    if(!user) {
      return res.status(404).json({
        status: "error",
        error: "Email Not Registered",
      });
    }

    const verifiedUser = await bcrypt.compare(password, user.password)
    if(!verifiedUser) {
      res.status(401).json({
                status: "error",
                error: "Incorrect password",
              });
    }
    const token = createToken(user)
    res.status(200).json({
      status: "success",
      token,
      user
    })
  } catch(error) {
    console.log(error)
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
      error
    })
  }
};

module.exports = { signin, signup };
