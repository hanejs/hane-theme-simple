import assert from 'assert'
import faker from 'faker'
import jsdom from 'jsdom'

import SimpleTheme from './../lib/index'

describe('theme', () => {
  it('should get object', () => {
    let theme = new SimpleTheme()
    assert.equal(typeof theme, 'object')
  })

  it('should get Layout', () => {
    let theme = new SimpleTheme()
    assert.equal(theme.getLayout().type.name, 'Layout')
  })

  it('should get Metadata', () => {
    let theme = new SimpleTheme()
    assert.equal(theme.getMetadata().type.name, 'Metadata')
  })
})

describe('theme.render', () => {
  let testData = {
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
    let theme = new SimpleTheme(),
      html = theme.render()

    jsdom.env(html, (err, window) => {
      assert.equal(window.document.getElementsByTagName('main')[0].textContent, '')
    })
  })

  it('should render item page', () => {
    let theme = new SimpleTheme(testData),
      html = theme.render('item')
    jsdom.env(html, (err, window) => {
      assert.equal(window.document.getElementsByClassName('entry-title ')[0].textContent, testData['items'][0]['title'])
    })
  })

  it('should render index page', () => {
    let theme = new SimpleTheme(testData),
      html = theme.render()
    jsdom.env(html, (err, window) => {
      assert.equal(window.document.getElementsByTagName('article').length, testData['items'].length)
    })
  })
})

