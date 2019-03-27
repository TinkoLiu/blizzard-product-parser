/* eslint-disable no-undef */
import Parser from '../src/js/index'
var path = [
  '/Users/Shared/Battle.net/Agent/product.db',
  '/file/not/exist',
  '/path3/not/exist'
]
const parser = new Parser()
const assert = require('assert')
const expect = require('chai').expect
describe('#getPath()', () => {
  it('getPath() should return ' + path[0], () => {
    assert.strictEqual(parser.getPath(), path[0])
  })
})
describe('#setPath(value)', () => {
  it('setPath(value) should set path to the value \'' + path[2] + '\'', () => {
    const _parser = new Parser()
    _parser.setPath(path[2])
    assert.strictEqual(_parser.getPath(), path[2])
  })
})
describe('#isDBExist()', () => {
  it('isDBExist() should return true', () => {
    assert.strictEqual(parser.isDBExist(), true)
  })
  it('_parser should not exist', () => {
    const _parser = new Parser(path[1])
    assert.strictEqual(_parser.isDBExist(), false)
  })
})
describe('#decode()', () => {
  it('_parser decode should throw an Error product.db not found', () => {
    const _parser = new Parser(path[1])
    assert.throws(_parser.decode, 'product.db not found at ' + path[1])
  })
})
describe('#getRaw()', () => {
  it('parser getRaw should return raw parsed object', () => {
    parser.decode()
    expect(parser.getRaw()).to.be.an('object')
  })
})
describe('#getProducts()', () => {
  it('parser getProducts should return an array of all installed product', () => {
    expect(parser.getProducts()).to.be.an('array')
  })
})
describe('#getInstallPath(uid)', () => {
  it('getInstallPath should return a path of installed product by its uid', () => {
    expect(parser.getInstallPath('heroes')).to.be.a('string')
  })
  it('getInstallPath should return false if uid is invalid or uninstalled', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(parser.getInstallPath('invalid_blizzard_product_uid')).to.be.false
  })
})
describe('#Using function before decode', () => {
  it('should return an error ask you call decode() first', () => {
    const _parser = new Parser()
    expect(() => _parser.getInstallPath('heroes')).to.throw('You should decode first')
  })
})
