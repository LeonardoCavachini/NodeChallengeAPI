const Articles = require('../db/models/articles');

const SUCCESS = 200;
const FOUND = 302

const article = async (req, res) => {
  const { category } = req.query;
  const show = await Articles.query()
  .select('category','title','summary')
  .where('category', category).withGraphFetched( 'author' );
  
  let arrayData = []
  for(let i=0;i<show.length;i++) {
    const { author, category, title, summary } = show[i];
     const obj = {
      "author":{"name": author.name, "picture": author.picture},
      "category": category,
      "title": title,
      "summary": summary
    }
    arrayData.push(obj)
  }
  return res.status(SUCCESS).json(arrayData);
};

const articlesById = async (req, res) => {
  const { id } = req.params;
  const showId = await Articles.query().findById(id).withGraphFetched( 'author' );
  const { name, picture } = showId.author;
  const { category, title, summary, firstParagraph, body } = showId;

  if(req.payload){
    const obj = {
      "author": {"name": name, "picture": picture},
      "category": category,
      "title": title,
      "summary": summary,
      "firstParagraph": firstParagraph,
      "body": body
    }
    return res.status(FOUND).json(obj);

  } else {
    const obj = {
      "author": {"name": name, "picture": picture},
      "category": category,
      "title": title,
      "summary": summary,
      "firstParagraph": firstParagraph
    }
    return res.status(FOUND).json(obj);
  }
};

module.exports = {
  article,
  articlesById
};
