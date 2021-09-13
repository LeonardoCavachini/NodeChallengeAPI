require('dotenv').config();
const express = require('express');
const dbSetup = require('./db/db-setup');

const PORT = process.env.SERVER_PORT;
const HOST = '0.0.0.0';

dbSetup();
const app = express();
app.use(express.json());

const { 
  createUser, 
  userLogin 
} = require('./services/users');

const {
  article,
  articlesById
} = require('./services/articles');

const { 
  authorShow, 
  authorCreate, 
  authorUpdate, 
  authorDelete
} = require('./services/admin/authors');

const { 
  articleShow,
  articleCreate,
  articleUpdate,
  articleDelete
} = require('./services/admin/articles');

const checkUser = require('./middleware/checkUser');
const checkLogin = require('./middleware/checkLogin');
const checkAuthorization = require('./middleware/checkAuthorization');
const articlescheckAuth = require('./middleware/articlescheckAuth');

app.post('/api/sign-up', checkUser, createUser);
app.post('/api/login', checkLogin, userLogin);

//article route
app.get('/api/articles', article);
app.get('/api/articles/:id', articlescheckAuth, articlesById );

// author adm route
app.get('/api/admin/authors', checkAuthorization, authorShow);
app.post('/api/admin/authors', checkAuthorization, authorCreate);
app.put('/api/admin/authors/:id', checkAuthorization, authorUpdate)
app.delete('/api/admin/authors/:id', checkAuthorization, authorDelete);

//article adm route
app.get('/api/admin/articles', checkAuthorization, articleShow);
app.post('/api/admin/articles', checkAuthorization, articleCreate);
app.put('/api/admin/articles/:id', checkAuthorization, articleUpdate);
app.delete('/api/admin/articles/:id', checkAuthorization, articleDelete);

app.listen(PORT, HOST, () => {
  console.log(`server running on port ${PORT}`);
});