import React, { Component } from 'react'
import '../css/header.css'


class Musicbar extends Component  {
  constructor(props) {
    super(props)
  }



  render() {

    
      return (
    
        <div className="footer">
          <iframe src={this.props.link}  style={{height: "100%",width:"100%"}} frameBorder="0" allowFullScreen allow="autoplay"></iframe>
        </div>

      );
}

}

export default Musicbar;
