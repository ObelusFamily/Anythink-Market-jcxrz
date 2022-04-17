var axios = require('axios');
var data = JSON.stringify({
  "user": {
    "email": "john1@jacob.com",
    "password": "12345678"
  }
});

var config = {
  method: 'post',
  url: 'http://localhost:3000/api/users/login',
  headers: { 
    'Content-Type': 'application/json', 
    'X-Requested-With': 'XMLHttpRequest'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
