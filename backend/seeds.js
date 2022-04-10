var axios = require("axios");

// let config = {
//   method: "post",
//   url: "http://localhost:3000/api/users",
//   headers: {
//     "Content-Type": "application/json",
//     "X-Requested-With": "XMLHttpRequest",
//   },
//   data: {
//     user: {
//       email: "john@jacob.com",
//       password: "12345678",
//       username: "johnjacob",
//     },
//   },
// };

// for (let i = 0; i < 101; i++) {
//   config.data.user.email = `john${i}@jacob.com`;
//   config.data.user.username = `johnjacob${i}`;

//   axios(config)
//     .then(function (response) {
//       console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

console.log(config);

const addItem = (token) => {

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
    
  const config1 = {
      method: 'post',
      url: 'http://localhost:3000/api/items',
      headers: { 
        'Content-Type': 'application/json', 
        'X-Requested-With': 'XMLHttpRequest', 
        'Authorization': `Token ${token}`
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
    
};

addItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTJjMTRhYWIzZDI4MDA0MTk1MDY2OCIsInVzZXJuYW1lIjoiam9obmphY29iMTAwIiwiZXhwIjoxNjU0Nzc0NjAzLCJpYXQiOjE2NDk1OTA2MDN9.RRaRbTItSQTH-MZCZrYXd2IQCxw1qMd-oi7UmJbT404')
