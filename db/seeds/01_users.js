
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          email: 'alborg.b@gmail.com',
          name: 'Brady',
          password: 'pass',
          pub_key: '0x23571754544Cc1a95d269B8D75bAFf4C17A8B223'},
        {
          email: 'test@gmail.com',
          name: 'Greg',
          password: 'pass',
          pub_key: '0xC8a013451768a24177926f6E27f938909A2C493E'},
        { 
          email: 'test@test.com',
          name: 'Nicki',
          password: 'pass',
          pub_key: '0x13e8f455058885ac53896cd252880D153993B399'},
      ]);
    });
};
