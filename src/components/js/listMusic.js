import React, { Component } from 'react'
import ShowListMusic from '../js/showListMusic'
import PaginationMusic from './paginationMusic'
import CategoryMusic from '../js/CategoryMusic'
import MusicBar from '../js/MusicBar'
import Header from '../js/header'
import '../css/header.css'

class ListMusic extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      listMusic :[1],
      loading:true,
      categories:[
        {
          linkImage:"https://avatar-nct.nixcdn.com/topic/mobile/2020/06/17/7/b/3/b/1592361564422_org.jpg",
          title:"nhạc Hoa"
        },
        {
          linkImage:"https://avatar-nct.nixcdn.com/topic/mobile/2020/06/09/3/2/9/5/1591683723884_org.jpg",
          title:"nhạc trẻ"
        },
        {
          linkImage:"https://avatar-nct.nixcdn.com/topic/mobile/2020/06/09/3/2/9/5/1591683963667_org.jpg",
          title:"nhạc latin"
        },
        {
          linkImage:"https://avatar-nct.nixcdn.com/topic/mobile/2020/06/09/3/2/9/5/1591687974679_org.jpg",
          title:"nhạc trữ tình"
        },
        {
          linkImage:"https://avatar-nct.nixcdn.com/topic/mobile/2020/06/15/9/d/c/3/1592202306299_org.jpg",
          title:"âu mỹ"
        },
        {
          linkImage:"https://avatar-nct.nixcdn.com/topic/mobile/2020/06/22/7/c/e/e/1592809802026_org.jpg",
          title:"nhạc kpop"
        }
      ],
      sizePagination:0,
      linkMusic :""
    }
    this.onLoadListMusic=this.onLoadListMusic.bind(this)
    this.onLoadSongByKeyword=this.onLoadSongByKeyword.bind(this)
    this.onLoadCategory=this.onLoadCategory.bind(this)
    this.onLoadMusicLink=this.onLoadMusicLink.bind(this)
  }

  async onLoadListMusic(number){
    this.setState({
      loading :true,
      listMusic:[]
    })
    let url = "https://listmusicnodejs.herokuapp.com/api/list-music/?pageSize=8&pageIndex="+number
    let response = await fetch(url)
    let body = await response.json()
    this.setState({
      loading :false,
      listMusic:body
    })
  }

  onLoadMusicLink(link){
    console.log(link)
    this.setState({
      linkMusic:link
    })
    console.log(this.state.linkMusic)
  }


  async onLoadSongByKeyword(keyword){
    this.setState({
      loading :true,
      listMusic:[]
    })
    let url = "https://listmusicnodejs.herokuapp.com/api/list-music/find/?search=" + keyword
    let response = await fetch(url)
    let body = await response.json()
   
    this.setState({
      loading:false,
      listMusic:body
    })
  }

  async onLoadCategory(keyword){

    this.setState({
      loading :true,
      listMusic:[]
    })
    
    let queryString = "https://listmusicnodejs.herokuapp.com/api/categories/find/?search=" + keyword
    let response = await fetch(queryString + "")
    let body = await response.json()

    let queryStringCategories = "https://listmusicnodejs.herokuapp.com/api/list-music/?pageSize=8&pageIndex=1&search=" + body
    let responseCategories = await fetch(queryStringCategories + "")
    let bodyCategories = await responseCategories.json()
 

    this.setState({
      loading:false,
      listMusic:bodyCategories
    })
  }

  componentWillMount(){
    this.onLoadListMusic(1)
  }

  render() {

    const listMusicSize = this.state.listMusic.length
   
  return (

  

    <div >
        <Header onSearchSongByKeyword={this.onLoadSongByKeyword}></Header>
<div>
  <div className="not-found">NOT FOUND</div>
  <div className="container mt-4">
    <div className="row">
      <div id="list-music" className="col-lg-5">

        {
          this.state.loading ? 
          <div className="loader"></div>
          : ""
        }

        {
        this.showItemMusic(this.state.listMusic)         
        }

    
      </div>
      <div className="col-lg-2" />
      <div className="col-lg-3 categories-list">
        <ul>
        {this.showCategoryMusic(this.state.categories)}
        </ul>
        <div className="user-online" id="user-online-server-emit" />
      </div>
    </div>
  </div>
  <div className="container mt-3">
    <nav aria-label="...">
      <ul className="pagination" id="pagination-list-music">
      <li className="page-item pageCurrent" id="btn-page-previous"><a className="page-link" href="#"><i className="fas fa-backward"></i></a></li>
      {this.paginationMusic()}
      <li className="page-item pageCurrent" id="btn-page-next"><a className="page-link" href="#"><i className="fas fa-forward"></i></a></li>
      </ul>
    </nav></div>
</div>

<MusicBar link={this.state.linkMusic}></MusicBar>

    </div>
  );
}

// async getNumberPage(){

//   let urlPage = "https://listmusicnodejs.herokuapp.com/api/list-music"
//   let responsePage = await fetch(urlPage)
//   let bodyPage = await responsePage.json()

//   let sizePagination = Math.ceil(bodyPage.length / 8) 

//   return sizePagination
// }

// Show the Pagination for list music
 paginationMusic(){
  let result = []

// await this.getNumberPage()


  for (let page = 1; page <= 4; page++) {
    let classPage = ' page' + page + " page-link "
    let currentPage = 'page-item pageCurrent' + page
    result.push(<PaginationMusic
      key ={page}
      page ={page}
      value={page}
      classNameLi ={currentPage} 
      classNameA ={classPage} 
      onLoadListMusic={this.onLoadListMusic}
      ></PaginationMusic> )
}

 return result
}

// show item song from api and render to web
showItemMusic =(music)=>{

  let result =""

 result = music.map((item ,index) =>{
    return (
      <ShowListMusic
      key ={index}
      _id= {item._id}
      imageLink = {item.imageLink}
      musicLink = {item.musicLink}
      title = {item.title}
      author = {item.author}
      onLoadMusicLink={this.onLoadMusicLink}
      ></ShowListMusic>
    )
})

  return result
}

// show item categories
showCategoryMusic = (music)=>{
  let result= music.map((item ,index) =>{
    return (
      <CategoryMusic
      key ={index}
      linkImage ={item.linkImage}
      alt ={item.title}
      onLoadCategory ={this.onLoadCategory}
      ></CategoryMusic>
    )
}
  )
  return result
}



}

export default ListMusic;
