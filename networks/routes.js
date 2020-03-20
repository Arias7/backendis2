const app = require('express').Router()
const auth = require('../controllers/Auth')
const crudCommon = require('../networks/crud_common')
const controlUsuario = require('../controllers/Usuario')
const {
    usuario,
    rol
} = require('../models')

const {
    mwToken
} = require('../middelwares')

app.post('/login', auth.login)
//Comentar hasta que el front consuma el token
//app.use(mwToken)

//#####################################################
//################     USUARIO      ###################
//####################################################

app.use('/createUser', crudCommon(usuario))
app.get('/listUsers', controlUsuario.list)


//#####################################################
//##################     ROL      #####################
//#####################################################

app.use('/createRol', crudCommon(rol))
app.use('/roles', crudCommon(rol))



module.exports = app