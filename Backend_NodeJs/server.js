
const {sequelize} = require('./src/models');
const express = require('express');
const userRoute = require('./src/routes/userRoute');
const competenceRoute = require('./src/routes/competenceRoute');
const profilRoute = require('./src/routes/profilRoute');
const experienceRoute = require('./src/routes/experienceRoute');
const educationRoute = require('./src/routes/educationRoute');
const cvRoute = require('./src/routes/cvRoute');

const app = express();
app.use(express.json());

app.use('api/users',userRoute);
app.use('api/competences',competenceRoute);
app.use('api/profils',profilRoute);
app.use('api/educations',educationRoute);
app.use('api/experiences',experienceRoute);
app.use('api/cvs',cvRoute);

sequelize.sync({ alter: true })
  .then(() => console.log('Base synchronisée avec toutes les tables'))
  .catch(err => console.error('Erreur de synchronisation', err));

  const PORT = 3000;
  app.listen(PORT, () => console.log(`Serveur sur le port ${PORT}`));