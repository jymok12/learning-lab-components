const Joi = require('joi')

module.exports = Joi.object({
  filename: Joi.string()
    .meta({ label: 'File name' })
    .description('Name of the file to retrieve.')
    .required(),
  sha: Joi.string()
    .meta({ label: 'Sha' })
    .description('The commit sha at which to retrieve the file contents. This will default to the head commit sha from the pull request or push payload.')
})