require("dotenv").config()
const { get } = require('env-var')

const envs = {
    port: get("PORT").required().asPortNumber(),
    publicPat: get("PUBLIC_PATH").default("public").asString()
}

module.exports = {
    envs
}


