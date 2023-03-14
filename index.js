const express = require("express");
const app = express()
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});

app.get('/albums', (req, res) => {
    const htmlData = `<h1>Top 25</h1>
                    <ul>
                    <li><a href="/albums/0">lil peep</a></li>
                    </ul>`
    res.send(htmlData);
});

app.get('/albums/:id', (req, res) => {
    const {id} = req.params;
    const htmlData = `<h1>here they are</h1>
                        <a href="">${id}</a>` 
});