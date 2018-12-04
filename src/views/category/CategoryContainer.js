import React, { Component } from 'react';
import Category from './Category';
import api from '../../helpers/api';

class CategoryContainer extends Component {
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


export default CategoryContainer;