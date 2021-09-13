# Wellcome to my node challenge!

In this challenge I developed an api node. 🚀
---

# How to use

1 - for this application you´ll need to install Docker, if you do no have it, please check here `https://docs.docker.com/get-docker/`

2 - clone this repository with `git clone https://github.com/LeonardoCavachini/NodeChallengeAPI.git`

3 - open the folder `NodeChallengeAPI`

4 - create a `.env` file like this:
```
JWT_SECRET=secret
SERVER_PORT=port_number
```
# create DataBase

run this code `docker-compose up -d`

# migrations

run this code `yarn migrate`

# seeds

run this code `yarn run seed`

# run application

run this code `yarn dev`

# Sign-up API - post

endpoint `http://localhost:PORT/api/sign-up`

body
```json
{
    "name": "user_name",
    "email": "user_email",
    "role": "admin or user"
}
```

# Login API - post

when you are logged in to the application you will create a token, just used it on headers with the name `authorization`
endpoint `http://localhost:PORT/api/login`
body 
```json
{
    "name": "leonardo",
    "email": "leo@leo.com",
    "role": "admin"
}
```
# CRUD Authors

just users logged as `admin` are able to do this.

endpoint `http://localhost:PORT/api/admin/authors` - create - post
endpoint `http://localhost:PORT/api/admin/authors` - read - get
endpoint `http://localhost:PORT/api/admin/authors/:id` - update - put
endpoint `http://localhost:PORT/api/admin/authors/:id` - delete - delete

body
```json
{
 "name": "author name",
 "picture": "iamge url",
}
```

# CRUD Articles

just users logged as `admin` are able to do this.

endpoint `http://localhost:PORT/api/admin/articles` - create - post
endpoint `http://localhost:PORT/api/admin/articles` - read - get
endpoint `http://localhost:PORT/api/admin/articles/:id` - update - put
endpoint `http://localhost:PORT/api/admin/articles/:id` - delete - delete

body
```json
{
  "authorId": "author ID",
  "category": "Category",
  "title": "Article title",
  "summary": "summary of the article",
  "firstParagraph": "<p>This is the first paragraph of this article</p>",
  "body": "<div><p>Second paragraph</p><p>Third paragraph</p></div>"
}
```

# List article by category -get

endpoint `http://localhost:PORT/api/articles?category=slug`

# Article detail - get

just users logged are able to read the body.

endpoint `http://localhost:PORT//api/articles/:id`
