const mongoose = require('mongoose')

const EkskulSchema = new mongoose.Schema({
    id : {
        type: String,
        required: [true, 'id'],
        unique: true,
        index:true
 
    },
    jenis : {
        type: String,
        required: [true, 'silahkan isi jenis eskul '],
        unique: false
    },
    ruangan : {
        type: String,
        required: [true, 'masukan ruangan eskul'],
        unique: true
    },
    waktu : {
        type: String,
        required: [true, 'silahkan isi waktu eskul'],
        unique: false
    },
    pembimbing : {
        type: String,
        required: [true, 'silahkan isi masukan nama pembimbing'],
        unique: false
    }
})

module.exports = mongoose.model('Ekskul', EkskulSchema)