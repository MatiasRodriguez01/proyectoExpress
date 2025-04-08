const { starServer } = require('./server/server')
const { envs } = require("./config/config")

console.log("hola")

const main = () => {
    starServer(envs)
} 

(async () => {
    main();
})()