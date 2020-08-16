import React, { Component } from 'react'
import '../css/header.css'


class SearchForm extends Component  {
  constructor(props) {
    super(props)
    this.state={
        keyword:""
    }
  }


  onChangeSearchNavbar = (event)=>{
    let target = event.target;
    let name = target.name;
    let value =target.value;
    this.setState({
      [name] : value
    })

  }


  onSearchingNavBar= (event) =>{
    event.preventDefault();   
    this.props.onSearchSongByKeyword(this.state.keyword)  
  }


  render() {
    let { keyword } =this.state
    
      return (
    
        <form className="input-group md-form form-sm form-2 pl-0 " style={{width: '80%'}} action="http://localhost:8000/api/list-music" method="GET">
        <input className="form-control my-0 py-1 red-border"  type="text" placeholder="Search" aria-label="Search" autoComplete="off"
        name="keyword" 
        value ={ keyword }
        onChange={ this.onChangeSearchNavbar }
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary my-sm-0" type="submit" onClick={this.onSearchingNavBar}><i className="fas fa-search text-grey" aria-hidden="true" /></button> 
        </div>
      </form>

      );
}






}

export default SearchForm;
