exports.seed = function (knex, Promise) {
  return knex("classes_clients").insert([
    { client_id: 2, class_id: 1 },
    { client_id: 2, class_id: 2 },
  ]);
};
