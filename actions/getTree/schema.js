const Joi = require('joi')

module.exports = Joi.object({
  sha: Joi.string()
    .meta({ label: 'Sha' })
    .description('The commit sha to get the tree for.'),
  recursive: Joi.boolean()
    .meta({ label: 'Recursive' })
    .description('Include sub-paths, not just the top level directory.')
    .default(false)
})