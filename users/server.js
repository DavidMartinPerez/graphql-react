const express = require('express');
const expressGraphQL = require('express-graphql');


const app = express();

app.use('/graphql', expressGraphQL({
    graphiql: true
}))

const port = 4000;
app.listen( port, () => {
    console.log(`Escuchando...`);
    console.log(`GraphQL -> http://localhost:${port}/graphql`);
});
