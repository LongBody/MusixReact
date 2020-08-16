import React, { Component } from 'react'
import '../css/header.css'


class ShowListMusic extends Component  {
  constructor(props) {
    super(props)
  }


  ListenToMusic(link){
    console.log(link)
    this.props.onLoadMusicLink(link)
  }





  render() {


    let classMusic = "row mt-2 wrap-content-music " + this.props._id
    let {musicLink , imageLink , title , author} = this.props


      return (
    
<div className={classMusic}  value={musicLink} onClick={() =>this.ListenToMusic(musicLink)}>
<div className=" image-link">
    <img className ="img-fluid card" src = {imageLink}  style={{ height: 50}}/> 
</div>
<div className=" ml-2">
<a href={musicLink} id="listen-music-link"></a>
    <div className="title-song ${musicLink}">{title}</div>
    <div className="author">{author}</div>
</div>
</div>


  
      );
}

}

export default ShowListMusic;
