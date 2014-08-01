WannaHang APP
=============

####NOTE: This name is probably going to change soon.




##Api Calls
<table>
  <thead>
    <tr>
      <td>HTTP Verb</td>
      <td>URI</td>
      <td>Fields</td>
      <td>Description</td>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td>POST</td>
    <td>api/session/</td>
    <td>email, password</td>
    <td>Returns cookie and user info</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>api/session/</td>
    <td></td>
    <td>Logs you out</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>api/users/friends/</td>
    <td>username</td>
    <td>Adds the username friendlist</td>
  </tr>
  </tbody>
</table>




<!--
app.route('/api/users')
  .post(users.create)
  .put(users.changePassword);
app.route('/api/users/me')
  .get(users.me);
app.route('/api/users/:id')
  .get(users.show);
 -->
