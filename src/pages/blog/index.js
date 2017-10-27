import React from 'react';
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';
import ItemGrid from '../../components/item-grid'
import './index.css';

const Blog = () => (
  <div id='blog'>
    <div id="blog-heading">
      <FontAwesome size='3x' name='pencil' />
      <h1>Blog</h1>
    </div>
    <ItemGrid/>
  </div>
)

export default Blog
