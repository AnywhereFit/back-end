const db = require("../data/db-config");

const getAll = () => {
  return db("classes");
};

const getById = (id) => {
  return db("classes").where("class_id", id).first();
};

async function create(newClass) {
  const [created] = await db("classes").insert(newClass).returning("*");
  return created;
}

// const create = async (classes) => {
//   const [id] = await db("classes").insert(classes);
//   return getById(id);
// };

const updateById = async (id, classes) => {
  await db("classes").where("class_id", id).update(classes);
  return getById(id);
};

// async function getClientClasses(user_id) {
//   const classes = await db("users as u")
//     .select("u.user_id", "u.username", "c.*")
//     .leftJoin("classes_clients as cc", "cc.client_id", "u.user_id")
//     .join("classes as c", "c.class_id", "cc.class_id")
//     .where("user_id", user_id);

//   return classes;
// }

const deleteById = (id) => {
  return db("classes").where("class_id", id).del();
};
module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  // getClientClasses,
};

// async function getAll() {
//   const classes = await db("classes");
//   return classes;
// }

// async function getById(class_id) {
//   const [theClass] = await db("classes").where("class_id", class_id);
//   return theClass;
// }

// async function getUserClasses(user_id) {
//   const classes = await db("users as u")
//     .select("u.user_id", "u.username", "c.*")
//     .leftJoin("classes_students as cs", "cs.student_id", "u.user_id")
//     .join("classes as c", "c.class_id", "cs.class_id")
//     .where("user_id", user_id);

//   return classes;
// }

// async function getInstructorClasses(user_id) {
//   const classes = await db("users as u")
//     .select("u.username", "c.*")
//     .count("cs.student_id", { as: "number_registered" })
//     .leftJoin("classes as c", "u.user_id", "c.class_instructor")
//     .join("classes_students as cs", "cs.class_id", "c.class_id")
//     .where("user_id", user_id)
//     .groupBy("u.username", "c.class_id");

//   classes.forEach(
//     (cl) => (cl.number_registered = parseInt(cl.number_registered))
//   );
//   return classes;
// }

// async function addClass(newClass) {
//   const [created] = await db("classes").insert(newClass).returning("*");
//   return created;
// }

// async function removeClass(class_id) {
//   const rowsDeleted = await db("classes").where("class_id", class_id).del();
//   return rowsDeleted;
// }

// async function signupForClass({ class_id, student_id }) {
//   const [id] = await db("classes_students")
//     .insert({ class_id, student_id })
//     .returning("student_id");
//   const userClasses = await getUserClasses(id);
//   return userClasses;
// }

// async function editClass(id, changes) {
//   await db("classes").where("class_id", id).update(changes);
//   const updatedClass = await getById(id);
//   return updatedClass;
// }

// async function dropClass(obj) {
//   const rowsDeleted = await db("classes_students")
//     .where({ class_id: obj.class_id, student_id: obj.student_id })
//     .del();
//   return rowsDeleted;
// }
