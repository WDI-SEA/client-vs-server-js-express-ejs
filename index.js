const Express = require('express')
const app = Express()
const ejsLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.get('/', (req, res) => {
    console.log("✨✨✨✨ CONSOLE LOG FROM OUR BACKEND ✨✨✨✨")

    let aJSMessage = "Hello! This is the backend saying hello too!"

    res.render('index', { aJSMessage: aJSMessage})
})

app.listen(3000)