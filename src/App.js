import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import RecipeList from './Components/RecipeList';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            recipes: [],
            loading: true
        };
    }

    componentDidMount() {
        this.performSearch();
    }

    performSearch = (query = '') => {
        fetch(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=${query}`)
            .then(response => response.json())
            .then(responseData => {
                this.setState({
                    recipes: responseData.results,
                    loading: false
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
        }

    render() {
        return (
            <div>
                <div className="main-header">
                  <div className="inner">
                    <h1 className="main-title">Recipe Search </h1>
                    <SearchForm onSearch={this.performSearch} />
                  </div>
                </div>
                <div className="main-content">
                    {
                        (this.state.loading)
                        ? <p>Loading</p>
                        : <RecipeList data={this.state.recipes} />
                    }
                </div>
                <div className="footer">
                  <sub><i> *Powered by <a href="http://www.recipepuppy.com" >Recipe Puppy</a></i> </sub>
                </div>
            </div>
        );
    }
}
