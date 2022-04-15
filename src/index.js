// src/index.js
import express from 'express';
import routes from './routes'; 
import cors from 'cors'

const app = express() 
app.use(cors())
const port = 3000 
app.get('/', routes.home)
app.get('/datum', routes.datum)
app.get('/vrijeme', routes.vrijeme)
app.get('/dodaj', routes.dodaj)
app.get('/dohvati', routes.dohvati)
app.get('/studenti', routes.studenti)
app.get('/studenti/first', routes.studentiFirst)
app.get('/studenti/last', routes.studentiLast)
app.listen(port, () => console.log(`Slušam na portu ${port}! `))
