fetch('http://jservice.io/api/random', {method: 'get'})
        .then(response => {
          response.json().then(r => console.log(r));
        })
        .then(data => console.log(data))