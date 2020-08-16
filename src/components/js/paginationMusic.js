import React, { Component } from 'react'
import '../css/header.css'


class PaginationMusic extends Component  {
  constructor(props) {
    super(props)
    this.state={
      active:1
    }
  }

  render() {

    let {page ,classNameLi , classNameA, value} = this.props 
    console.log(this.state.active)
    
    if(value === this.state.active ){
      classNameLi =  'page-item pageCurrent' + page + " active"
   }
   else classNameLi =  'page-item pageCurrent' + page 

   


      return (
    
    <li className={classNameLi} value={page} onClick={ ()=> this.changePage(value) } ><a className={classNameA}  href="#">{page}</a></li>

      );
}


async changePage(value){
  this.props.onLoadListMusic(value)
  console.log(value)
  console.log("click")

 await this.setState({
    active:0
  })

  console.log(this.state.active )

await  this.setState({ active:value}, () => {
    console.log(this.state.active, 'change state successfully');
  }); 
  console.log(this.state.active + "state current")
    
  }



}

export default PaginationMusic;
