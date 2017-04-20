import '../../node_modules/waterwheel/dist/waterwheel.js'
//const Waterwheel = require('waterwheel');
const waterwheel = new Waterwheel({
  base: 'http://localhost:8888/dir/html',
  oauth: {
    grant_type: 'password',
    client_id: '1eb49e44-bf13-4ae4-a0a6-6cb3c92b3ddb',
    client_secret: 'admin',
    username: 'admin',
    password: 'admin',
    scope: 'administrator'
  }
});

waterwheel.api['user'].get(1)
.then(res => {
  // Drupal JSON Object
})
.catch(err => {
  // err
});