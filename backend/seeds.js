var axios = require('axios');
var data = JSON.stringify({
  "item": {
    "title": "How to train your dragon",
    "description": "Ever wonder how?",
    "body": "Very carefully.",
    "tagList": [
      "dragons",
      "training"
    ]
  }
});

var config = {
  method: 'post',
  url: 'http://localhost:3000/api/items',
  headers: { 
    'Content-Type': 'application/json', 
    'X-Requested-With': 'XMLHttpRequest', 
    'Authorization': 'Token '
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
