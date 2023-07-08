const express = require('express');
const home = require('./routers/homerouter');
const about = require('./routers/aboutrouter');
const contact = require('./routers/contactrouter');

const app = express();

app.use(home);
app.use(about);
app.use(contact);

app.listen(3000, () => {
	console.log("listening on http://localhost:3000");
});
