//const { envs } = require('./conf/env')
import { envs } from './conf/env.js'
//const { StartServer } = require('./server/server')
import { StartServer } from './server/server.js'

const main = () => {
    StartServer({
       port: envs.PORT,
       public_path: envs.PUBLIC_PATH
    })
}


(async() => {
    main()   
})()