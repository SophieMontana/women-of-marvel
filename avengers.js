var api = require('marvel-api')
var Profile = require('./avengerProfile')

class Avengers {
  constructor(config) {
    this.marvel = api.createClient({
      publicKey : config.publicKey,
      privateKey : config.privateKey
    });
  }

  assemble(cb) {
    Promise.all([this.marvel.characters.findByName('Thundra'),this.marvel.characters.findByName('Storm'), this.marvel.characters.findByName('Selene'),
      this.marvel.characters.findByName('Thena'), this.marvel.characters.findByName('Mary Jane Watson')])
      .then((responses) => {
      let heroProfiles = []
      response.forEach((character) => {
        let profile = new Profile ({name:character.data[0].name})
        heroProfile.push(profile.createProfile())
      })
      console.log('Lady Marvel')
      console.log(avengers)
      cb(JSON.stringify(herProfiles))

      })
  }
}

module.exports = Avengers
