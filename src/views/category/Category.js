import React from 'react';
import PropTypes from 'prop-types';

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
            <div className={'iframe'}>
                <iframe id={'wrong'} className={'invisible'} width="100" height="100" src="https://lottiefiles.com/iframe/2068-error-cross" frameborder="0" ></iframe>
                <iframe id={'check_down'} className={'invisible'} width="100" height="100" src="https://lottiefiles.com/iframe/433-checked-done" frameborder="0" ></iframe>
            </div>
        </section>
    );
  
};

Category.propTypes = {
    category: PropTypes.shape({}).isRequired,
    currentQuestion: PropTypes.number.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    answerInput: PropTypes.shape({
        value: PropTypes.instanceOf(HTMLInputElement)
}),
};

export default Category;