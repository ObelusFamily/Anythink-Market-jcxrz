var axios = require('axios');

const getToken = async () => {

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

 const response = await axios(config)
const user = response.data.user
return user
// .then(async function (response) {
//     // console.log(JSON.stringify(response.data));
//     const user = response.data
//     console.log("🚀 ~ file: seeds.js ~ line 26 ~ user", user)
// })
// .catch(function (error) {
//     console.log(error);
// });

}

const useToken = async () => {
  const user = await getToken()

var data = JSON.stringify({
  "item": {
    "title": "eitan test",
    "description": "eitan test",
    "body": "test",
    "tagList": [
      "dragons",
      "training"
    ]
  }})

  var config = {
    method: 'post',
    url: 'http://localhost:3000/api/items',
    headers: { 
      'Content-Type': 'application/json', 
      'X-Requested-With': 'XMLHttpRequest', 
      'Authorization': `Token ${user.token}`
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
  
}

useToken()