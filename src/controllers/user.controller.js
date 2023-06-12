const User = require('../models/user.model');

exports.findAllUser = (req, res) => {
  try {
    // aqui va la logica

    return res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong! 📢',
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await User.create({ name, email, password, role });

    return res.status(200).json({
      status: 'success',
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong! 📢',
    });
  }
};

exports.findUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({
      where: {
        id,
        status: 'available',
      },
    });

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `User with Id ${id} not found`,
      });
    }

    return res.status(200).json({
      status: 'success',
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong! 📢',
    });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req;
    const { name, email } = req.body;
    const user = await User.findOne({
      where: {
        id,
        status: 'available',
      },
    });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: `User with Id ${id} not found`,
      });
    }

    return res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong! 📢',
    });
  }
};

exports.delete = (req, res) => {
  try {
    return res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong! 📢',
    });
  }
};
