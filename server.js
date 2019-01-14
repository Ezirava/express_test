const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.json({firstName : 'Parinphat',
lastName : 'Wasinchaikulpat' , studentId : '6130315421'
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))