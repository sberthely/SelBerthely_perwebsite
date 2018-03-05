import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import VideoList from './video_list';
import VideoDetail from './video_detail';

const API_KEY = 'AIzaSyCRYNHS7hxLi3NW5atx_BjNdRD9YVJzfVE'

// <div className="Hobbies section">
//   <h1 className="hobbies-intro"><strong>Travel with me</strong>:  and you will never want to travel alone!</h1>
// </div>

class Hobbies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('blockchain berkeley decal fall 2017');
  }


  videoSearch(term){

    YTSearch({key: API_KEY, term: term}, (videos) => {

      this.setState ({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {

    return (
      <div>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
          videos = {this.state.videos} />
      </div>
    );
  }
}

export default Hobbies;
