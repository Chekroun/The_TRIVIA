import React from 'react';
import PropTypes from 'prop-types';

const Category = ({category, verif}) => (
  <section>
    <h1>Category page:{category.title}</h1>
    <p>titre question: {category.clues[0].answer}</p>
    <p>Question: {category.clues[0].question}</p>
    <form onSubmit={verif}>
    <input type="texte" width="80px" name="reponse"></input>
    <button type={'submit'}>submit</button>
    </form>
   
  </section>
);

Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default Category;