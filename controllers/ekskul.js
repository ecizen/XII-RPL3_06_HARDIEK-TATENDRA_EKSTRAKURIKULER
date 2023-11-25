const Ekskul = require('../models/Ekskul')

module.exports = {
  index: async(req, res) => {
   try {
    const ekskuls = await Ekskul.find()
    if(ekskuls.length > 0){
        res.status(200).json({
      status : true,
      data : ekskuls,
      method: req.method,
      url: req.url
    })
      
    } else{
       res.json({
        status: false,
        message: "data masih kosong"
       })
    }
 
    
   } catch (error) {
    res.status(400).json({sucess : false})
    
   }

},
create: async(req, res) => {
    try {
      const ekskuls = await Ekskul.create(req.body)
      res.status(200).json({
        status : true,
        data: ekskuls,
        method: req.method,
        url: req.url,
        message: "Data berhasil ditambah"
      })
      
    } catch (error) {
      res.status(400).json({status: false})
      
    }
   
   
  },
  show :  async(req, res) => {
    try {
      const ekskuls = await Ekskul.find({ pembimbing: req.params.pembimbing });
      res.json({
        status : true,
        data: ekskuls,
        method: req.method,
        url: req.url,
        message: "Data berhasil ditemukan"
      })
      
    } catch (error) {
      res.status(400).json({status: false}) 
    }
  },
  showid:  async(req, res) => {
    try {
      const ekskuls = await Ekskul.findById(req.params.id)
      res.json({
        status : true,
        data: ekskuls,
        method: req.method,
        url: req.url,
        message: "Data berhasil ditemukan"
      })
      
    } catch (error) {
      res.status(400).json({status: false}) 
    }
  },
  showid :  async(req, res) => {
    try {
      const ekskuls = await Ekskul.findById(req.params.id)
      res.json({
        status : true,
        data: ekskuls,
        method: req.method,
        url: req.url,
        message: "Data berhasil ditemukan"
      })
      
    } catch (error) {
      res.status(400).json({status: false}) 
    }
  },
  update :  async(req, res) => {
    try {
      const ekskuls = await Ekskul.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      })
      res.json({
        status : true,
        data: ekskuls,
        method: req.method,
        url: req.url,
        message: "Data berhasil diubah"
      })
      
    } catch (error) {
      res.status(401).json({status: false}) 
    }

  },
  delete: async (req, res) => {
    try {
      await Ekskul.findByIdAndDelete(req.params.id)
      res.json({
        status : true,
        method: req.method,
        url: req.url,
        message: "Data berhasil dihapus"
      })
      
    } catch (error) {
      res.status(400).json({status: false})
      
    }
   
    
  }
}