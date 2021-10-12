import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import HomeItem from './HomeItem';
import {Row} from 'react-bootstrap';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state={
      WatchesArr:[],
    }
  }

  componentDidMount=()=>{
    const url='http://localhost:3010/getWatches';
    axios
    .get(url)
    .then(result=>{
      this.setState({
        WatchesArr:result.data
      })
    })
    .catch(err =>{
      console.log(err);
    })
  }

  addToFavoritesPage=(object)=>{
    const url='http://localhost:3010/addToFav';
    axios
    .post(url,object)
    .then(result=>{
      console.log('added to favorites successfully');
    })
    .catch(err=>{
      console.log(err);
    });
  };

  render() {
    return (
      <>
        <h1>API Watches</h1>
      <Row>
        {this.state.WatchesArr.map(item=>{
          return(
            <HomeItem
            item={item}
            addToFavoritesPage={this.addToFavoritesPage}
            />
          )
        })}
      </Row>
      </>
    )
  }
}

export default Home;
