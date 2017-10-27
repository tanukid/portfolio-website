import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import FontAwesome from 'react-fontawesome';

import './index.css'
import 'font-awesome/css/font-awesome.css'

const Avatar = () => (
  <div className="avatar">
    <img src={require('../../public/static/danielhollcraft.png')}></img>
    <div>Daniel Hollcraft</div>
  </div>
);

const Sidebar = () => (
  <div id="sidebar">
    <Avatar />
    <Link activeClassName="active" exact to="/"><FontAwesome size='5x' name='home' />Home</Link>
    <Link activeClassName="active" to="/about/"><FontAwesome size='5x' name='user' />About</Link>
    <Link activeClassName="active" to="/portfolio/"><FontAwesome size='5x' name='cubes' />Portfolio</Link>
    <Link activeClassName="active" to="/blog/"><FontAwesome size='5x'name='pencil' />Blog</Link>
    <Link activeClassName="active" to="/contact/"><FontAwesome size='5x' name='envelope' />Contact</Link>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Daniel Hollcraft"
      meta={[
        { name: 'description', content: 'Home' },
        { name: 'keywords', content: 'Daniel Hollcraft' },
      ]}
    />
    <div>
      <Sidebar />
      <div id='content'>
        {children()}
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
