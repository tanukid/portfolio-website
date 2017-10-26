import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import FontAwesome from 'react-fontawesome';

import './index.css'

const Avatar = () => (
  <div className="avatar">
    <img src={require('../../public/static/danielhollcraft.png')}></img>
    <div>Daniel Hollcraft</div>
  </div>
);


const Sidebar = () => (
  <div className="sidebar">
    <Avatar />
    <a href="#"><FontAwesome name='home' />Home</a>
    <a href="#"><FontAwesome name='user' />About</a>
    <a href="#"><FontAwesome name='cubes' />Portfolio</a>
    <a href="#"><FontAwesome name='pencil' />Blog</a>
    <a href="#"><FontAwesome name='envelope' />Contact</a>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div>
      <Sidebar />
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
