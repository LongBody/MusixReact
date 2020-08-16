import React, { Component } from 'react'
import '../css/header.css'


class CategoryMusic extends Component  {
  constructor(props) {
    super(props)
  }

  onLoadCategory(type){
this.props.onLoadCategory(type)
  }

  render() {
    // let classMusic = "page-item " + this.props._id
    let {linkImage , alt} = this.props


      return (
    
        <li className="mt-2">
        <a>
          <img src={linkImage} className="img-categories nhac-hoa img-fluid" alt={alt} onClick={() => this.onLoadCategory(alt)}/>
        </a>
      </li>

      );
}

}

export default CategoryMusic;
