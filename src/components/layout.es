import React from 'react'

import Header from './header'
import Footer from './footer'
import {IndexContent, ItemContent} from './content'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    let data = props.data || {}
    this.state = {
      blog: data['blog'] || {},
      contentType: props.contentType,
      activeTab: data['activeTab'],
      tabs: data['tabs'] || [],
      posts: data['posts'] || [],
      categories: data['categories'] || [],
      tags: data['tags'] || [],
      links: data['links'] || [],
    }
    switch (this.state.contentType) {
    case 'item':
      this.state.contentData = data['post']
      break
    case 'index':
      this.state.contentData = this.state.posts
      this.state.nextUrl = data['nextUrl']
      this.state.prevUrl = data['prevUrl']
      break
    }
  }

  getContent () {
    let reactElement
    const { contentData } = this.state
    switch (this.state.contentType) {
      case 'item':
        reactElement = <ItemContent data={contentData} />
        break
      case 'index':
        reactElement = <IndexContent data={contentData}
                                     prevUrl={this.state.prevUrl}
                                     nextUrl={this.state.nextUrl} />
        break
    }
    return reactElement
  }

  getComments () {
    const { blog, contentData } = this.state
    const script = `
  var disqus_config = function () {
  this.page.url = ${JSON.stringify(blog.blogUrl + contentData.url)};
  this.page.identifier = ${JSON.stringify(contentData.slug)};
  };
  (function() {
  var d = document, s = d.createElement('script');
  s.src = 'https://tengattack.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
  })();
  `
    return (
      <div id="comments">
        <div id="disqus_thread"></div>
        <script type="text/javascript"
                dangerouslySetInnerHTML={{ __html: script }}>
        </script>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
      </div>
    )
  }

  render () {
    const { contentType, activeTab, tabs, categories, tags, links, blog } = this.state
    return (
      <div className="site">
        <div id="top"></div>
        <div className="site-inner">
          <Header blog={blog} tabs={tabs} activeTab={activeTab} />
          <div className="site-content">
            <div className="content-area">
              {this.getContent()}
              {contentType === 'item' &&
                this.getComments()
              }
            </div>
            <aside className="sidebar">
              {categories.length > 0 &&
                <section className="widget">
                  <h2 className="widget-title">Categories</h2>
                  <ul>
                  {categories.map((category, i) => {
                    return <li key={i}>{category['name']}</li>
                  })}
                  </ul>
                </section>
              }
              <section className="widget">
                <div className="widget-component widget-tags">
                  <h2 className="widget-title">Tags</h2>
                  <ul>
                  {tags.map((tag, i) => {
                    return (
                      <li key={i}>
                        <a target="_blank" href={tag.url} title={tag['name']}>
                          { tag['name'] }
                        </a>
                      </li>
                    )
                  })}
                  </ul>
                </div>
                <div className="widget-component widget-links">
                  <h2 className="widget-title">Links</h2>
                  <ul className="widget-links">
                  {links.map((link, i) => {
                    return (
                      <li key={i}>
                        <a target="_blank" href={link.url} title={link.description || undefined}>
                          { link['name'] }
                        </a>
                      </li>
                    )
                  })}
                  </ul>
                </div>
              </section>
            </aside>
          </div>
          <Footer blog={blog} />
        </div>
      </div>
    )
  }
}

export default Layout
