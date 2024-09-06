const express = require("express")
const cors = require('cors')

const port = 3000

app = express()
app.use(cors())

app.get("/", (req, res) => {
    res.json({
        status: "up"
    })
})

app.listen(port, () => {
    console.log(`Server started listening at ${port}`);
})
