import React , {Component} from "react";
import Unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component{

  state = {images : []};

  onSearchSubmit = async (term)=>{

    const response = await Unsplash.get("/search/photos", {
      params:{query : term}
    })
    this.setState({images:response.data.results});
  }

  render(){
    return(
      <div className="ui container" style={{marginTop: "10px"}}>
            <h1>Search Images</h1>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images}/>
      </div>
    )
  }
}
export default App;
