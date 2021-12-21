exports.up = async (knex) => {
  await knex.schema
    .createTable("roles", (roles) => {
      roles.increments("role_id");
      roles.string("role_name", 32).notNullable().unique();
    })
    .createTable("users", (users) => {
      users.increments("user_id");
      users.string("username", 200).notNullable();
      users.string("password", 200).notNullable();
      users
        .integer("role_id")
        .unsigned()
        .notNullable()
        .references("role_id")
        .inTable("roles")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT");
      users.timestamps(false, true);
    })
    .createTable("classes", (classes) => {
      classes.increments("class_id");
      classes.string("class_name", 128).notNullable();
      classes.string("class_duration", 128).notNullable();
      classes.integer("max_attendees").notNullable();
      classes.date("class_date").notNullable();
      classes.time("start_time").notNullable();
      classes.string("class_location", 128).notNullable();
      classes.string("class_type", 120).notNullable();
      classes.string("class_intensity_level", 120).notNullable();
      classes
        .integer("class_instructor")
        .notNullable()
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("classes_clients", (classes_clients) => {
      classes_clients.increments("class_client_id");
      classes_clients
        .integer("client_id")
        .notNullable()
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      classes_clients
        .integer("class_id")
        .notNullable()
        .unsigned()
        .notNullable()
        .references("class_id")
        .inTable("classes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists("classes_clients")
    .dropTableIfExists("classes")
    .dropTableIfExists("users")
    .dropTableIfExists("roles");
};
