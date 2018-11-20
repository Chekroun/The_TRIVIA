import React, { Component } from 'react';
import Category from './Category';
import api from '../../helpers/api';

class CategoryContainer extends Component {
  state = {
    category: null,
  }
  async componentDidMount() {
    const data = await api.getCategoryById(this.props.match.params.id);
    this.setState({
      category: data,
    });
  }
  render() {
    console.log(this.state);
    return (
      <Category
        categoryId={this.props.match.params.id}
        category={this.state.category}
      />
    );
  }
}

export default CategoryContainer;