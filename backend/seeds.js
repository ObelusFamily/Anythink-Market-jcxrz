var axios = require('axios');


// for(let i = 0; i < 101; i++) {

//     config = {

//         method: 'POST',
//         url: 'http://localhost:3000/api/users',
//         headers: { 
//             'Content-Type': 'application/json', 
//             'X-Requested-With': 'XMLHttpRequest', 
//         },
//         data: {
//           user: {
//             email: `${i}john@jacob.com`,
//             password: "1234678",
//             username: `${i}john`
//           }
//         }
//     }

//     axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
        
      
// }


var data = JSON.stringify({
  "item": {
    "title": "Yalla Hapoel!",
    "description": "Ever wonder how?",
    "body": "Very carefully.",
    "tagList": [
      "dragons",
      "training"
    ]
  }
});

var config1 = {
  method: 'post',
  url: 'http://localhost:3000/api/items',
  headers: { 
    'Content-Type': 'application/json', 
    'X-Requested-With': 'XMLHttpRequest', 
    'Authorization': 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNGYyMzAyOTQ4NTI5MDA0ODQ0YmYyZCIsInVzZXJuYW1lIjoiZWl0YW5ncnVuc2VpZCIsImV4cCI6MTY1NDYwNjQ4OSwiaWF0IjoxNjQ5NDIyNDg5fQ.9WWPAYK0gzbp8TN8UBGMeDbrSUb01sqh1jnG6pbfGqY'
  },
  data : data
};

axios(config1)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
