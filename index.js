const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Welcome to my Node.js app!');
});

// Добавляем маршруты
app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

// Запускаем сервер
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//http://localhost:3000/hello