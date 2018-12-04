import React from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD
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
=======
const Category = ({ category, currentQuestionIndex, handleSubmit, answerInput, score}) => {
    const theQuestion = category.clues[currentQuestionIndex];
    return(
        <section className={'question-box'}>
            <h1>Category page: {category.title}</h1>
            <span>Question : {theQuestion.question}</span>
            <span>Votre score : {score}</span>
            <form className={'question-box'} onSubmit={handleSubmit}>
                <input ref={answerInput}></input>
                <button type={'submit'}>Send answer</button>
            </form>
        </section>
    );
  
};
>>>>>>> ed4b9f55d5bf9b2740a0dfbffe012aa65840ad1b

Category.propTypes = {
    category: PropTypes.shape({}).isRequired,
    currentQuestion: PropTypes.number.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    answerInput: PropTypes.shape({
        value: PropTypes.instanceOf(HTMLInputElement)
}),
};

export default Category;