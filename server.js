const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
 });
  