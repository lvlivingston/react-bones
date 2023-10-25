const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    res.json({ name, email });
});

app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    res.json({ id, name, email });
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id });
});

const PORT = process.env.PORT || 3000;

server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

// we need the app and the server bc we're testing now
module.exports = {app, server};

