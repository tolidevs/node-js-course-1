const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const NotFoundRoute = require('./routes/404')

app.use(bodyParser.urlencoded({extended: false}));

// all paths preceeded by /admin to get to this route
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(NotFoundRoute);

app.listen(3000);
