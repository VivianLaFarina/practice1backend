exports.findAllUsers = (req, res) => {
    try {

        // aqui va la logica

	return res.status(200).json ({
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





exports.createUser = (req, res) => {
    try {
        return res.status(200).json ({
            status: 'success',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
           status: 'fail',
           message: 'Something went very wrong! 📢',

        });
    }
}




exports.findUser = (req, res) => {
    try {
} catch (error) {
    console.log(error);
    return res.status(500).json({
       status: 'fail',
       message: 'Something went very wrong! 📢',

    });
}
};

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