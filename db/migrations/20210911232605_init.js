exports.up = function(knex) {
  return knex.schema
  .createTable('authors', function (table) {
     table.increments();
     table.string('name', 25).notNullable();
     table.string('picture', 50).notNullable();
     table.timestamps(true, true);
  })
  .createTable('articles', function (table) {
     table.increments();
     table.string('category', 20).notNullable();
     table.integer('authorId').references('id').inTable('authors').index();
     table.string('title', 30).notNullable();
     table.string('summary', 35).notNullable();
     table.string('firstParagraph', 150).notNullable();
     table.string('body', 300).notNullable();
     table.timestamps(true, true);
  })
  .createTable('users', function (table) {
    table.increments();
    table.string('email', 30).notNullable();
    table.string('name', 20).notNullable();
    table.string('role', 5).notNullable();
    table.timestamps(true, true);
 });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("articles")
  .dropTableIfExists("users")
  .dropTableIfExists("authors");
};
