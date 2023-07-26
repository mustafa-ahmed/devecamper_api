// @desc    Get All Bootcamps
// @route   /api/v1/bootcamps
// @access  public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "get all bootcamps",
  });
};

// @desc    Create Bootcamps
// @route   /api/v1/bootcamps
// @access  public
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "create new bootcamp",
  });
};

// @desc    Get Bootcamp
// @route   /api/v1/bootcamps/:id
// @access  public
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `show bootcamp ${req.params.id}`,
  });
};

// @desc    Delete Bootcamps
// @route   /api/v1/bootcamps/:id
// @access  public
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `delete bootcamp ${req.params.id}`,
  });
};

// @desc    Update Bootcamps
// @route   /api/v1/bootcamps/:id
// @access  public
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `update bootcamp ${req.params.id}`,
  });
};
