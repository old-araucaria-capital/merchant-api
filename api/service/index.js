const data = require('../data')

exports.getValidChances = () => {
    const validChances = data.getValidChances()
    if (validChances) return validChances
    else return {}
}

exports.getErrorArbitration = () => {
    const errorArbitration = data.getErrorArbitration()
    if (errorArbitration) return errorArbitration
    else return {}
}

exports.getArbitrations = () => {
    const arbitrations = data.getArbitrations()
    if (arbitrations) return arbitrations
    else return {}
}

exports.getChanceArbitration = () => {
    const chanceArbitration = data.getChanceArbitration()
    if (chanceArbitration) return chanceArbitration
    else return {}
}