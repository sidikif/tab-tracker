const { User } = require('../models')

module.exports = {
  async register (req, res) {
    try {
      console.log(req.body)
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: "Cette addresse Mail est deja utilisee!"
      })
    }
  },
  async login (req, res) {
    try {
      console.log(req.body)
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email: email,
        }
      })
      if (user) {
        if (user.password === password) {
          console.log(user)
          res.send(user.toJSON())
        } else {
          res.status(400).send({
            error: "Password incorrect!"
          })
        }
      } else {
        res.status(400).send({
          error: "Cet E-Mail n'est pas encore enregistre! Veyez vous inscrire."
        })
      }


    } catch (err) {
      res.status(400).send({
        error: "Erreur d'Authentification!"
      })
    }
  }
}
