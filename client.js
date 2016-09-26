var fetch = require('node-fetch');

fetch('http://localhost:3000', {
    method: 'get',
    headers: {
        'x-access-token': '111'
    }
}).then(function(res) {
    return res.json();
}).then(function(json) {
    console.log(json);
});
