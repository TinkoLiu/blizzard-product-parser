import desc from '../assets/bundle.json'
const Protobuf = require('protobufjs')
const proot = Protobuf.Root.fromJSON(desc)
const decoder = proot.lookupType('Database')
export default decoder
