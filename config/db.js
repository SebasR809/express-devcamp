const sequelize = require('./seq')
const colors = require('colors')

const connectDB = async () => {
    try {
        await sequelize.authenticate()
        console.log('conectado a servidor mysql'.rainbow)   
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB