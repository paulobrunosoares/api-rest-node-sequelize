const express = require('express')
const sequelize = require('./config/database')
const Routes = require('./routes/index.routes')

const app = express()
const port = 3000

sequelize.sync().then(() => {
  console.log('Database & tables created!')
})

app.use(express.json())

app.use('/api/products', Routes)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))