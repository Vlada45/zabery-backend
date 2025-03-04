const express = require('express');

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');

//const bodyParser = require('body-parser');

// Případné vytvoření tabulek
require('./utilities/dbLoad');

// Import rout pro autentifikaci z authRoutes
const authRoutes = require('./routes/authRoutes');

// Import rout pro použití pieceRoutes
const pieceRoutes = require('./routes/pieceRoutes');

// Inicializace aplikace Express
const app = express();

// Povolení požadavků z jiných domén
app.use(cors());

// Parsování příchozích JSON požadavků
app.use(express.json({limit: '10mb'}));

// Použití rout pro autentifikaci uživatele
app.use('/auth', authRoutes);

// Použití rout pro práci s jednotlivými klipy a částicemi
app.use('/data', pieceRoutes);

// Spuštění serveru na portu
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server běží na portu ${PORT}`);
});