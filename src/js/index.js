import decoder from './database'
import settings from './settings'
import fs from 'fs'
class Parser {
  constructor (path = null) {
    this.decoder = decoder
    if (path == null) {
      path = settings.dbPath[process.platform]
    }
    this.path = path
  }
  getPath () {
    return this.path
  }
  setPath (path) {
    this.path = path
  }
  isDBExist () {
    if (this.path == null) {
      throw new Error('product.db path is null')
    }
    return fs.existsSync(this.path)
  }
  decode () {
    if (!this.isDBExist()) {
      throw new Error('product.db not found at ' + this.path)
    }
    this.buffer = fs.readFileSync(this.path)
    this.data = this.decoder.decode(this.buffer)
  }
  getRaw () {
    if (!this.data) {
      throw new Error('You should decode first')
    }
    return this.data
  }
  getProducts () {
    if (!this.data) {
      throw new Error('You should decode first')
    }
    var t = []
    this.data.productInstall.forEach(element => {
      t.push(element.uid)
    })
    return t
  }
  getInstallPath (uid) {
    if (!this.data) {
      throw new Error('You should decode first')
    }
    for (let index = 0; index < this.data.productInstall.length; index++) {
      const element = this.data.productInstall[index]
      if (element.uid === uid) {
        return element.settings.installPath
      }
    }
    return false
  }
}

export default Parser
