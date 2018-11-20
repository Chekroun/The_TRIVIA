import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ categoryId, categoryName }) => (
  <section>
    <h1>Category page: {categoryId}</h1>
    
  </section>
);

Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default Category;