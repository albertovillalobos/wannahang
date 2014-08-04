WannaHang APP
=============

####NOTE: This name is probably going to change soon.




##Api Calls


| HTTP Verb | URI                         | Fields          | Description                     |
|-----------|-----------------------------|-----------------|---------------------------------|
| POST      | api/session/                | email, password | Returns cookie and user info    |
| DELETE    | api/session/                |                 | Logs you out                    |
| POST      | api/users/friends/          | username        | Adds the username friendlist    |
| DELETE    | api/users/friends/          | username        | Deletes the username friendlist |
| DELETE    | /api/users/search/:username | username        | Gets user by username           |





<!--
app.route('/api/users')
  .post(users.create)
  .put(users.changePassword);
app.route('/api/users/me')
  .get(users.me);
app.route('/api/users/:id')
  .get(users.show);
 -->
