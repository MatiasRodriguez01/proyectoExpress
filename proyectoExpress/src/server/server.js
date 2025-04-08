
const express = require("express")
const path = require('path')

const starServer = (variablesDeEntorno) => {
    const app = express();
    console.log(variablesDeEntorno)

    app.use(express.static(`${variablesDeEntorno.publicPat}/dist2`))

    app.get("*", (req, res) => {
        const pathList = path.join(__dirname, "../../../express/public/dist2/index.html")
        res.sendFile(pathList)
    })


    app.listen(variablesDeEntorno.port, () => (
        console.log("escuchando el puerto: ", variablesDeEntorno.port)

    ))

}

module.exports = {
    starServer
}