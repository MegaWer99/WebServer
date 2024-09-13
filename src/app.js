const { envs } = require('./conf/env')
const { StartServer } = require('./server/server')

const main = () => {
    StartServer({
       port: envs.PORT,
       public_path: envs.PUBLIC_PATH
    })
}


(async() => {
    main()   
})()