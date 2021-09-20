const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const checkJwt = jwt({
      secret: jwks.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://gardenz.au.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://fullstackboilerplate/api',
    issuer: 'https://gardenz.au.auth0.com/',
    algorithms: ['RS256']
})

module.exports = checkJwt