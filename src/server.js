require('dotenv').config(); // configuracion varibles de entorno
const app = require('./app');
const { db } = require('./database/config');
//db cong
db.authenticate()
  .then(() => console.log('Database authenticated ...👽'))
  .catch((err) => console.log(err));

db.sync({ force: true })
  .then(() => console.log('Database Synced ...🤞🏻'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT;
app.listen(3004, () => {
  console.log(`Server running on port ${3004}...🦾👾`);
});
