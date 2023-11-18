const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors())

app.listen(3000, () => {
      console.log('Server is running on port 3000.');
});

// app.get('/', (req, res) =>{
//       res.sendFile(__dirname + '/index.html');
// });

// Middleware
// app.use(express.urlencoded({extended: true}))

app.get('/getCityWeather', async (req, res) => {
      resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.cname}&appid=6c4578e4de1000f08c28c5932abfe7d6&units=metric`)
      jsonResp = await resp.json()
      res.send(jsonResp);
});

