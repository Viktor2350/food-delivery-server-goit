const fs = require('fs');
const path = require('path');

const productsRoute = (request, response) => {
    const filePath = path.join(__dirname, '../../', 'db', 'all-products.json');
    const products = fs.statSync(filePath);

    response.writeHead(200, {
        'Content-Type': 'products/json',
        'Content-Length': products.size
    });

    const readStream = fs.createReadStream(filePath);

    readStream.pipe(response);
};
module.exports = productsRoute;