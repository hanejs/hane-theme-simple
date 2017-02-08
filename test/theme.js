import assert from 'assert'
import faker from 'faker'
import jsdom from 'jsdom'

import '../../hane'
import '../lib/index'

const theme = hane.runtime.theme

describe('theme', () => {
  it('should get object', () => {
    assert.equal(typeof theme, 'object')
  })

  it('should get Layout', () => {
    assert.equal(theme.getLayout().type.name, 'Layout')
  })

  it('should get Metadata', () => {
    assert.equal(theme.getMetadata().type.name, 'Metadata')
  })
})

describe('theme.render', () => {
  const testData = {
    items: [],
    categories: [],
    tags: []
  }

  for (let i = 0; i <= 10; i++) {
    testData['items'].push({
      title: faker.lorem.words(),
      content: faker.lorem.text(),
      pubDate: faker.date.past().toString()
    })
  }

  it('should render black page', () => {
    const html = theme.render(testData)
    jsdom.env(html, (err, window) => {
      assert.equal(window.document.getElementsByTagName('main')[0].textContent, '')
    })
  })

  it('should render item page', () => {
    const html = theme.render(testData, 'item')
    jsdom.env(html, (err, window) => {
      assert.equal(window.document.getElementsByClassName('entry-title')[0].textContent, testData['items'][0]['title'])
    })
  })

  it('should render index page', () => {
    const html = theme.render(testData)
    jsdom.env(html, (err, window) => {
      assert.equal(window.document.getElementsByTagName('article').length, testData['items'].length)
    })
  })
})
