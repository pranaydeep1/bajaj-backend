// const express = require('express');
// const app = express();

// app.use(express.json());

// app.post('/endpoint', (req, res) => {
//     const data = req.body;
//     const response = {
//         status: 'success',
//         user_id: data.user_id,
//         college_email_id: data.college_email_id,
//         college_roll_number: data.college_roll_number,
//         numbers: data.numbers,
//         alphabets: data.alphabets
//     };
//     res.json(response);
// });

// app.get('/endpoint', (req, res) => {
//     res.json({ operation_code: '12345' });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const app = express();

app.use(express.json());

// Define routes with /bfhl prefix
app.get('/bfhl', (req, res) => {
    res.send('Welcome to the API');
});

app.post('/bfhl/endpoint', (req, res) => {
    const data = req.body;
    const response = {
        status: 'success',
        user_id: data.user_id,
        college_email_id: data.college_email_id,
        college_roll_number: data.college_roll_number,
        numbers: data.numbers,
        alphabets: data.alphabets
    };
    res.json(response);
});

app.get('/bfhl/endpoint', (req, res) => {
    res.json({ operation_code: '12345' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
