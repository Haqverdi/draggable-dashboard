/**
 * Main Card component
 */
import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ children, website }) {
  return (
    <article className="center mw5 mw6-ns hidden ba mv4">
      <h1
        className={`f4 ${
          website ? 'bg-near-black white' : 'bg-near-white'
        } mv0 pv2 ph3`}
      >
        {children}
      </h1>
    </article>
  );
}

Card.propTypes = {
  website: PropTypes.bool,
  children: PropTypes.string,
};
