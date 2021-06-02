const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({force: false}).then(() => {

app.listen(PORT, () => console.log("App listening on port"));
});


//heres the fix to the error im getting from sequelize https://stackoverflow.com/questions/61301940/sequelize-hasmany-is-working-fine-but-the-inverse-relation-is-not-working/61304209#61304209