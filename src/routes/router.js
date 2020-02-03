const mainRoute = require('./main/main');
const signUpRoute = require('./users/users');
const allProducts = require('./products/products')

const router = {
    '/products': allProducts,
    '/signup': signUpRoute,
    default: mainRoute
};

module.exports = router;