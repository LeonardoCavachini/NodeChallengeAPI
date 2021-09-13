exports.seed = async function(knex) {
  await knex.raw('TRUNCATE TABLE "users" CASCADE');
  await knex.raw('TRUNCATE TABLE "articles" CASCADE');
  await knex.raw('TRUNCATE TABLE "authors" CASCADE');

  await knex('users').insert([{
    id: 1,
    name: 'user',
    email: 'user@user.com',
    role: 'admin'
  }]);
  await knex('authors').insert([{
    id: 1,
    name: 'Jorge Amado',
    picture: 'https://picture.url',
  },
  {
    id: 2,
    name: 'Paulo Coelho',
    picture: 'https://picture.url',
  }]);
  return knex('articles').insert([{
    authorId: 1,
    category: "romance",
    title: "Dona Flor e Seus Dois Maridos",
    summary: "summary of the article",
    firstParagraph: "<p>This is the first paragraph of this article</p>",
    body: "<div><p>Second paragraph</p><p>Third paragraph</p></div>"
  },
  {
    authorId: 1,
    category: "romance",
    title: "Tieta do Agreste",
    summary: "summary of the article",
    firstParagraph: "<p>This is the first paragraph of this article</p>",
    body: "<div><p>Second paragraph</p><p>Third paragraph</p></div>"
  },
  {
    authorId: 1,
    category: "romance",
    title: "Gabriela, Cravo e Canela",
    summary: "summary of the article",
    firstParagraph: "<p>This is the first paragraph of this article</p>",
    body: "<div><p>Second paragraph</p><p>Third paragraph</p></div>"
  },
  {
    authorId: 2,
    category: "drama",
    title: "O Alquimista",
    summary: "summary of the article",
    firstParagraph: "<p>This is the first paragraph of this article</p>",
    body: "<div><p>Second paragraph</p><p>Third paragraph</p></div>"
  }]);
};
