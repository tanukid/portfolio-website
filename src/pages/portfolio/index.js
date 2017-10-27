import React from 'react';
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';
import ItemGrid from '../../components/item-grid'
import './index.css';

const Portfolio = () => (
  <div id='portfolio'>
    <div id="portfolio-heading">
      <FontAwesome size='3x' name='cubes' />
      <h1>Portfolio</h1>
    </div>
    <ItemGrid />
  </div>
)

export default Portfolio
