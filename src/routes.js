import moment from "moment";
const random = (max) => {
  return Math.floor(Math.random() * max);
};

const studentiLista = [
  {
    ime: "Maja",
    prezime: "Vrhić",
    jmbag: "46546546456",
    godinaStudiranja: "3",
  },
  {
    ime: "Alen",
    prezime: "Vaek",
    jmbag: "54634635464354",
    godinaStudiranja: "5",
  },
  {
    ime: "Dominik",
    prezime: "Ruške",
    jmbag: "3513513513513",
    godinaStudiranja: "1",
  },
  {
    ime: "Deni",
    prezime: "Vidan",
    jmbag: "695473354566",
    godinaStudiranja: "2",
  },
  {
    ime: "Dejvid",
    prezime: "Sajina",
    jmbag: "1123646565556",
    godinaStudiranja: "4",
  },
];

const vrijemelist = ["sunčano", "kišovito", "oblačno"];
let lista = [];

let home = (req, res) => res.send(`Home`);
let datum = (req, res) =>
  res.send(`Danasnje vrijeme: ${moment().format("DD.MM.YYYY HH:MM")}`);
let vrijeme = (req, res) =>
  res.send(`Danas ce biti: ${vrijemelist[random(2)]}`);
let dodaj = (req, res) => {
  lista.push(random(100));
  res.send(`U listi je dodan broj ${lista[lista.length - 1]}`);
};
let dohvati = (req, res) => {
  let clanoviListe = "";
  lista.forEach((el) => {
    clanoviListe += el + " ";
  });
  res.send(`Brojevi u listi: ${clanoviListe}`);
};
let studenti = (req, res) => res.send(studentiLista);
let studentiFirst = (req, res) => res.send(studentiLista[0]);
let studentiLast = (req, res) => res.send(studentiLista[studenti.length - 1]);

export default {
  home,
  datum,
  vrijeme,
  dodaj,
  dohvati,
  studenti,
  studentiFirst,
  studentiLast,
};
