const { Model } = require('objection');

class Authors extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'authors';
  }
};

module.exports = Authors;
