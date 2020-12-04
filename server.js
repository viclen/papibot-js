const app = require('./App');

app.server.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));