exports.up = function (knex, Promise) {
  return knex.schema.createTable("managers", table => {
    // game id
    table.increments("id").primary();
    table.text("manager");
    table.text("team_name");
    table.text("year_joined");
    table.integer("seasons");
    table.text("status");
    table.integer("total_pts");
    table.integer("total_w");
    table.integer("total_l");
    table.integer("games_played");
    table.integer("playoffs");
    table.integer("topfour");
    table.integer("finals");
    table.integer("titles");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("managers");
};



