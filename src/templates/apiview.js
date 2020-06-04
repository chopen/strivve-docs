import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import DocsMenu from '../components/DocsMenu';
import {htmlToReact} from '../utils';


export default class ApiView extends React.Component {
  render() {
    return (
        <Layout {...this.props}>
          <div className="outer">
            <div className="inner">
              <div className="docs-content">
                <DocsMenu {...this.props} page={this.props.pageContext} site={this.props.pageContext.site} />
                <div className="post type-docs">
                    <header className="post-header">
                      <h1 className="post-title line-left">{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
                    </header>
                        {htmlToReact(_.get(this.props, 'pageContext.html'))}
                </div>
              </div>
            </div>
          </div>
        </Layout>
    );

  }
}
