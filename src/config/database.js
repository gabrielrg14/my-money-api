const mongoose = require('mongoose')

mongoose.Promise = global.Promise // Para evitar warning no terminal - Promise no mongoose deprecated

const url = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb//localhost/mymoney'
module.exports = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.Error.messages.general.required = "O atributo {PATH} é obrigatório."
mongoose.Error.messages.Number.min = "{VALUE} é menor que o limite mínimo de {MIN}."
mongoose.Error.messages.Number.max = "{VALUE} é maior que o limite máximo de {MAX}."
mongoose.Error.messages.String.enum = "{VALUE} não é um atributo válido para {PATH}."