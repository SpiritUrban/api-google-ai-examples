const axios = require('axios');

const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';
const apiKey = '*******************';

const data = {
  contents: [
    {
      parts: [
        {
          text: 'Explain how AI works. Отвечай на русском',
        },
      ],
    },
  ],
};

axios
  .post(`${apiUrl}?key=${apiKey}`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((response) => {
    console.log('Response:', response.data.candidates[0].content);
  })
  .catch((error) => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });
