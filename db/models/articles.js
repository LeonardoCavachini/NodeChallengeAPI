const { Model } = require('objection');

const Authors = require('./authors');

class Articles extends Model {
  static get tableName() {
    return 'articles';
  }
  static get relationMappings() {
    return {
      author: {
        relation: Model.BelongsToOneRelation,
        modelClass: Authors,
        join: {
          from: 'articles.authorId',
          to: 'authors.id'
        }
      },
    }
  }
};

module.exports = Articles;
