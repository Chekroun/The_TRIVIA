import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Category from './Category'

class CategoryContainer extends Component {
    constructor() {
        super();
        this.state = {
                question : '',
                answer: '',
                curentQuestion: 0,
                score: 0,
                playerAnswer: '',
                boxShadow: 'box-shadow: 0px 2px 2px 0px #22211f12, 0px 2px 4px 2px #22211f24'
        }
    }
    componentDidMount() {
        fetch('http://jservice.io/api/clues', {method: 'get'})
        .then(response => {
          response.json().then(r => {
            this.setState({
                question: r[this.state.curentQuestion].question,
                answer: r[this.state.curentQuestion].answer
            })
            console.log(r);
            });
        })
    }
    handleClick(e, data) {
        var correctAnswer = this.state.answer;
        var playerAnswer = data;
        if(correctAnswer === playerAnswer) {
            this.setState({
                curentQuestion: this.state.curentQuestion + 1,
                score: this.state.score + 1
            })
        }
    }
    enterPressed(event) {
        var code = event.keyCode || event.which;
        if(code === 13) { 
            console.log('entré validé !');
            var correctAnswer = this.state.answer;
            var playerAnswer = event.target.value;
            if(correctAnswer === playerAnswer) {
                this.setState({
                    curentQuestion: this.state.curentQuestion + 1,
                    score: this.state.score + 1
                })
            } else {
                this.setState({
                    curentQuestion: this.state.curentQuestion + 1
                })
            }
            event.target.value = "";
            this.componentDidMount();
        } 
    }
    changeColor(event) {
        event.target.className= 'active'
    }
    render() {
        return(
            <div>
                <Category name={this.props.match.params.category} score={this.state.score}/>
                {this.componentDidMount}
                <div className={'question-box'}>
                    <b>{this.state.question} ?</b>
                    <div>
                        <b>Answer : </b>
                        <input type={'text'} name={'answer'} onKeyPress={this.enterPressed.bind(this)} onSelect={this.changeColor}/>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default withRouter(CategoryContainer);