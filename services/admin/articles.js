const Articles = require('../../db/models/articles');

const SUCCESS = 200;
const CREATED = 201;
const BAD_REQUEST = 400;

const articleShow = async (req, res) => {
  const show = await Articles.query()
  return res.status(SUCCESS).json(show);
};

const articleCreate = async (req, res) => {
  const { category, title, summary, authorId, firstParagraph, body } = req.body;
  await Articles.query().insert({ category, title, authorId, summary, firstParagraph, body })
  return res.status(CREATED).json({ message: 'The article was created' });
};

const articleUpdate = async (req, res) => {
  const { id } = req.params;
  const { category, title, summary, authorId, firstParagraph, body  } = req.body;
  try {
    await Authors.query()
    .findById(id)
    .patch({
      category, 
      title, 
      summary, 
      authorId, 
      firstParagraph, 
      body 
    });
  }catch(e) {
    return res.status(BAD_REQUEST).json( e.message );
  }
  return res.status(SUCCESS).json({ message: 'The article was updated' });
};

const articleDelete = async (req, res) => {
  const { id } = req.params;
  try {
    await Articles.query().deleteById(id);
  }catch(e) {
    return res.status(BAD_REQUEST).json( e.message );
  }
  return res.status(SUCCESS).json(category);
};

module.exports = {
  articleShow,
  articleCreate,
  articleUpdate,
  articleDelete
};
