const Repair = require('../models/repair.model');

exports.findAllRepair = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong! 📢',
    });
  }
};

exports.createRepair = async (req, res) => {
  try {
    const { date, userId } = req.body;

    const repair = await Repair.create({ date, userId });

    return res.status(200).json({
      status: 'success',
      repair,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong! 📢',
    });
  }
};

exports.findRepair = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong! 📢',
    });
  }
};
//
exports.update = (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong! 📢',
    });
  }
};
