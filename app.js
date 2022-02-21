const express = require('express');
const app = express();


//CRUD - Create, Read, Update, and Delete
//HTTP Methods - Post, Get, Put, Delete

const books = [
    {
        title: "O Lobo do Mar",
        author: "Jack London"
    },
    {
        title: "House of Gucci",
        author: "Sarah Gay Forden"
    }
];

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded()); //Parse URL-encoded bodies

app.get('', (req, res) => {
    console.log('Hello World')
    res.sendFile('index.html');
});

app.get('/books', (req, res) => {
    res.send(books);
});

app.get('/books/:id', (req, res) => {
    const id = req.params.id;
    res.send(books[id]);
});

app.post('/books/', (req, res) => {
    const book = req.body;
    books.push(book);
    res.send(book);
});

app.put('/books/:id', (req, res) => {
    const id = req.params.id;
    const updateBook = req.body;
    books[id] = updateBook;
    res.send(updateBook);
})

app.delete('/books/:id', (req, res) => {
    const id = req.params.id;
    books.splice(id, 1)
    res.send(id);
})

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Listening on ${port}`)
})
