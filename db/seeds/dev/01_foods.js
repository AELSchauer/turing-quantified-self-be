
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE foods RESTART IDENTITY CASCADE')
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {id: 1, name: 'Tomato', calories: 100, active: true, created_at: new Date, updated_at: new Date},
        {id: 2, name: 'Potato', calories: 200, active: true, created_at: new Date, updated_at: new Date},
        {id: 3, name: 'Borsh', calories: 600, active: true, created_at: new Date, updated_at: new Date},
        {id: 4, name: 'Gyros', calories: 900, active: true, created_at: new Date, updated_at: new Date}
      ]);
    });
};