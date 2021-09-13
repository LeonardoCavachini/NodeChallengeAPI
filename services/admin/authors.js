const Authors = require('../../db/models/authors');

const SUCCESS = 200;
const CREATED = 201;
const BAD_REQUEST = 400;

const authorShow = async (_req, res) => {
  const all = await Authors.query();
  return res.status().json(all)
};

const authorCreate = async (req, res) => {
  const { name, picture } = req.body;
  await Authors.query().insert({ name, picture })
  return res.status(CREATED).json({ message: 'The author was created' });
};

const authorUpdate = async (req, res) => {
  const { id } = req.params;
  const { name, picture } = req.body;
  try {
    await Authors.query()
    .findById(id)
    .patch({
      name,
      picture
    });
  }catch(e) {
    return res.status(BAD_REQUEST).json( e.message );
  }
  return res.status(SUCCESS).json({ message: 'The author was updated' });
};

const authorDelete = async (req, res) => {
  const { id } = req.params;
  try {
    await Authors.query().deleteById(id);
  }catch(e) {
    return res.status(BAD_REQUEST).json( e.message );
  }
  return res.status(SUCCESS).json({ message: 'The author was deleted' });
};

module.exports = {
  authorShow, 
  authorCreate, 
  authorUpdate, 
  authorDelete
};
