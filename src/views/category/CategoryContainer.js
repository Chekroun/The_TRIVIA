import React, { Component, createRef } from 'react';
import Category from './Category';
import api from '../../helpers/api';

class CategoryContainer extends Component {
<<<<<<< HEAD
  state = {
    category: null,
  }

  verif = (e) => {
    e.preventDefault();
     const rep = e.target.reponse.value;
     const repon = this.state.category.clues[0].answer;
     if (rep.toLowerCase() ===  repon.toLowerCase()) {
        console.log("bien");
     } 
     else {
       console.log("t'es naze!!!");
     }
  }

  async componentDidMount() {
    const data = await api.getCategoryById(this.props.match.params.id);
    this.setState({
      category: data,
    });
  }
  render() {
    const {category} = this.state;
    console.log(this.state);
    if (!this.state.category) return <div>is loading... </div>
    return (
      <Category
        categoryId={this.props.match.params.id}
        category={this.state.category}
        verif={this.verif}
      />
    );
  }
}
=======
    state = {
        category: null,
        currentQuestion: 0,
        score: 0,
        playerAnswer: ''
    }
    answerInput = createRef();

    async componentDidMount() {
        const data = await api.getCategoryById(this.props.match.params.id);
        this.setState( {
            category: data,
        });
    }

    handleSubmit = (e) => {
        // here I prevent de fault bh of submitting form
        e.preventDefault();
        const { category } = this.state;
        const  currentQuestion  = this.state.currentQuestion;
        var answer = this.answerInput.current.value;
        const currentAnswer = category.clues[currentQuestion].answer;
        console.log(answer.toLowerCase());
        if(answer.toLowerCase() === currentAnswer.toLowerCase()) {
            console.log("okok");
            this.setState({
                currentQuestion: this.state.currentQuestion + 1,
                score: this.state.score + 1
            })
        } else {
            this.setState({
                currentQuestion: this.state.currentQuestion + 1
            })
            console.log('non non');
            
        }
        this.answerInput.current.value = ' ';
    }

  render() {
      const { category } = this.state;
      const  currentQuestion  = this.state.currentQuestion;
     console.log(this.state);
     if(!category) return <div>is loading</div>
        return (
            <Category
                category={category}
                currentQuestionIndex = {currentQuestion}
                handleSubmit={this.handleSubmit}
                answerInput={this.answerInput}
                score={this.state.score}
            />
        );
        }
    }
>>>>>>> ed4b9f55d5bf9b2740a0dfbffe012aa65840ad1b


export default CategoryContainer;