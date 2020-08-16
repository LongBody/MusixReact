import React, { Component } from 'react'
import SearchForm from '../js/searchForm'

class Header extends Component  {
  constructor(props) {
    super(props)
    this.onLoadSongByKeyword=this.onLoadSongByKeyword.bind(this)
  }

  onLoadSongByKeyword(keyword){
    this.props.onSearchSongByKeyword(keyword)
  }

  render(){
    return (
      <div>
  <nav className="navbar navbar-expand-sm navbar-light bg-light">
    <div className="container"> 
      <a className="navbar-brand" href="../index.html"><img src="https://firebasestorage.googleapis.com/v0/b/ci37-32415.appspot.com/o/brand.png?alt=media&token=786f64d7-2d70-4131-a8fe-84d2dbe319d6" style={{height: '100px'}} /></a>
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse ml-5" id="collapsibleNavId">
        
        <SearchForm onSearchSongByKeyword={this.onLoadSongByKeyword}></SearchForm>
        <a type="button" id="sign-in-navbar" href="#" style={{position: 'relative', bottom: '52px', right: '60px', fontSize : '14px', color: '#1761a0'}} data-toggle="modal" data-target="#exampleModal">
          <i className="fas fa-sign-in-alt" /> Sign in
        </a>
        <span id="changeName" style={{position: 'relative', bottom: '52px', right: '115px', fontSize : '14px', color: '#1761a0'}}>
        </span>
        <button type="button" className="btn btn-sm btn-secondary" style={{display: 'none'}} id="btn-log-out">Log out</button>
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Sign In</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form action="http://localhost:8000/api/sign-in" method="GET" id="form-log-in">
                  <div className="form-group">
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                  </div>
                  <input type="password" className="form-control" id="InputPassword" placeholder="Enter Password" />
                </form>
              </div>
              <div id="wrong-user" />
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-success" id="btn-login-in">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  
      </div>
    );
  }



}

export default Header;
