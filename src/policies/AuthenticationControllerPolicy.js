const Joi = require('joi')

module.exports = {
  register: function (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: "L'address E-Mail entree est invalide"
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match the following rules
<br>
1. It must contain ONLY the following characters: lower case, uper case, numeric.
<br>
2. It must be at least 8 characters and not greater then 32.`
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
      }
    } else {
      next()
    }

  }
}
