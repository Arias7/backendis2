const app = require('express').Router()
const auth = require('../controllers/Auth')
const crudCommon = require('../networks/crud_common')
const controlUsuario = require('../controllers/Usuario')
const controlItem = require('../controllers/Item')
const controlProject = require('../controllers/Project')
const controlGeneric = require('../controllers/GenericList')
const {
    usuario,
    rol,
    permiso
} = require('../models')

const {
    mwToken
} = require('../middelwares')

app.post('/login', auth.login)
//Comentar hasta que el front consuma el token
//app.use(mwToken)

//#####################################################
//################     USUARIO      ###################
//#####################################################

app.use('/createUser', crudCommon(usuario))
app.get('/listUsers', controlUsuario.list)


//#####################################################
//##################     ROL      #####################
//#####################################################

app.use('/createRol', crudCommon(rol))
app.use('/listRoles', crudCommon(rol))

//#####################################################
//##################    ITEM      #####################
//#####################################################

app.get('/listItems', controlItem.list)

//#####################################################
//##################    PROYECTO      #################
//#####################################################

app.get('/listProjects', controlProject.list)

//#####################################################
//##################    Genéricos      ################
//#####################################################

app.get('/listEstados/:table_name', controlGeneric.listEstados)
app.use('/listPermisos', crudCommon(permiso))


module.exports = app