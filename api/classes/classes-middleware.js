const Classes = require("./classes-model");
const db = require("../data/db-config");

exports.checkAccountPayload = (req, res, next) => {
  const error = { status: 400 };
  const {
    class_name,
    class_duration,
    class_type,
    start_time,
    class_intensity_level,
    class_location,
    // number_registered,
    max_attendees,
    class_instructor,
  } = req.body;
  if (
    class_duration === undefined ||
    class_name === undefined ||
    start_time === undefined ||
    class_instructor === undefined ||
    class_intensity_level === undefined
  ) {
    error.message =
      "duration, class_name, start_time intensity_level are required";
    next(error);
  }
  if (
    class_type === undefined ||
    class_location === undefined ||
    // number_registered === undefined ||
    max_attendees === undefined
  ) {
    error.message = "type location and max_attendees are required";
    next(error);
  } else if (typeof class_name !== "string") {
    error.message = "name of classes must be a string";
    next(error);
  } else if (class_name.trim().length < 3 || class_name.trim().length > 100) {
    error.message = "name of classes must be between 3 and 100";
    next(error);
  } else if (typeof max_attendees !== "number" || isNaN(max_attendees)) {
    error.message = "message: max_attendees of classes must be a number";
    next(error);
    // } else if (
    //   typeof number_registered !== "number" ||
    //   isNaN(number_registered)
    // ) {
    //   error.message = "message: number_registered of classes must be a number";
    //   next(error);
  } else if (typeof class_type !== "string") {
    error.message = "type of classes must be a string";
    next(error);
  } else if (typeof start_time !== "string") {
    error.message = "start_time of classes must be a string";
    next(error);
  } else if (typeof class_intensity_level !== "string") {
    error.message = "intensity_level of classes must be a string";
    next(error);
  } else if (typeof class_location !== "string") {
    error.message = "location of classes must be a string";
    next(error);
  }
  if (error.message) {
    next(error);
  } else {
    next();
  }
};

exports.checkAccountNameUnique = async (req, res, next) => {
  try {
    const existing = await db("classes")
      .where("name", req.body.name.trim())
      .first();

    if (existing) {
      next({ status: 400, message: "that name is taken" });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

exports.checkAccountId = async (req, res, next) => {
  try {
    const classes = await Classes.getById(req.params.id);
    if (!classes) {
      next({ status: 404, message: "classes not found" });
    } else {
      req.classes = classes;
      next();
    }
  } catch (err) {
    next(err);
  }
};
