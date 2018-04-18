exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("managers")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("managers").insert([
        {
          id: 1,
          manager: "Ben",
          team_name: "Barles Charkley",
          year_joined: "2007",
          seasons: "10",
          status: "Active",
          total_pts: "120000",
          total_w: "150",
          total_l: "50",
          games_played: "200",
          playoffs: "9",
          topfour: "9",
          finals: "4",
          titles: "2",
        },
        {
          id: 2,
          manager: "Jon",
          team_name: "Windy City Champs",
          year_joined: "2007",
          seasons: "10",
          status: "Active",
          total_pts: "110000",
          total_w: "130",
          total_l: "50",
          games_played: "190",
          playoffs: "7",
          topfour: "4",
          finals: "3",
          titles: "2",
        },
      ]);
    })
};



