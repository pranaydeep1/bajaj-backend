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
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
// Define routes with /bfhl prefix
app.get('/bfhl', (req, res) => {
    res.send('Welcome to the API');
});



app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    
    if (!Array.isArray(data)) {
      return res.status(400).json({ error: 'Invalid input' });
    }
    
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestAlphabet = alphabets.length > 0 ? Math.max(...alphabets.map(char => char.charCodeAt(0))) : null;
  
    res.json({
      numbers: numbers.join(','),
      alphabets: alphabets.join(','),
      highestAlphabet: highestAlphabet ? String.fromCharCode(highestAlphabet) : 'None'
    });
  });

app.get('/bfhl/', (req, res) => {
    res.json({ operation_code: '12345' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
