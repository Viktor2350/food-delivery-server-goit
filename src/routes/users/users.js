const qs = require('querystring');
const fs = require('fs');
const path = require('path');

const saveUser = user => {
    const userName = user.username;
    const fileUser = path.join(__dirname, '../../', 'db', '/users', `${userName}.json`)
    fs.writeFile(fileUser, JSON.stringify(user), function (err) {
        if (err) throw err
        console.log(`${userName}.json was created`);
    })
};

const signUpRoute = (request, response) => {

    if (request.method === 'POST') {
        let body = '';

        request.on('data', function (data) {
            body += data;
            console.log('Incoming data!!!!');
        });

        request.on('end', function () {
            const user = JSON.parse(body);
            saveUser(user)
            const success = {
                status: 'success',
                user: user
            }

            response.writeHead(200, {
                "Content-type": "application/json"
            });
            response.write(JSON.stringify(success));
            response.end();

            const error = {
                status: 'error'
            };

            response.writeHead(403, {
                "Content-type": "application/json"
            })
            response.write(JSON.stringify(error));
            response.end();
        })
    }

};

module.exports = signUpRoute;