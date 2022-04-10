#!/bin/sh

var axios = require("axios");

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
        'Authorization': `Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTJjMTRhYWIzZDI4MDA0MTk1MDY2OCIsInVzZXJuYW1lIjoiam9obmphY29iMTAwIiwiZXhwIjoxNjU0Nzc0NjAzLCJpYXQiOjE2NDk1OTA2MDN9.RRaRbTItSQTH-MZCZrYXd2IQCxw1qMd-oi7UmJbT404`
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
    


