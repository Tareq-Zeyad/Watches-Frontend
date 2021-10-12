import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';
import FavItem from './FavItem';
import UpdateModal from './UpdateModal';

class FavFruit extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      FavWatchArr: [],
      showFlag: false,
      watchTitle: '',
      watchDescription: '',
      watchtoUSD: '',
      watchImage_URL: '',
      watchId: ''
    }
  }

  componentDidMount = () => {
    // const{user}=this.props.auth0;
    // const email = user.email;

    const url = `http://localhost:3010/getFavWatch?email=${this.props.auth0.user.email}`;
    axios
      .get(url)
      .then(result => {
        this.setState({
          FavWatchArr: result.data
        })
      })
      .catch(err => {
        console.log(err)
      });
  };

  deleteItem = (object) => {
    const { user } = this.props.auth0;
    const email = user.email;

    const obj = {
      email: email
    }

    const id = object.id;
    const url = `http://localhost:3010/deleteItem/${id}/${email}`;
    axios
      .delete(url, obj)
      .then(result => {
        this.setState({
          FavWatchArr: result.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  updateWatch=(event)=>{
    event.preventDefault();
    const { user } = this.props.auth0;
    const email = user.email;
    const obj={
      watchTitle: event.target.watchTitle.value,
      watchDescription: event.target.watchDescription.value,
      watchtoUSD: event.target.watchtoUSD.value,
      watchImage_URL: event.target.watchImage_URL.value,
      watchId: this.state.watchId,
      email:email
      
    }

    const url=`http://localhost:3010/updateWatches/${this.state.watchId}`;
    axios
    .put(url,obj)
    .then(result=>{
      this.setState({
        FavWatchArr:result.data
      })
    })
    .catch(err=>{
      console.log(err)
    })



  }

  handleClose = () => {
    this.setState({
      showFlag: false
    })
  }

  showUpdateForm = (item) => {
    this.setState({
      showFlag: true,
      watchTitle: item.watchTitle,
      watchDescription: item.watchDescription,
      watchtoUSD: item.watchtoUSD,
      watchImage_URL: item.watchImage_URL,
      watchId: item.watchId
    })
  }


  render() {
    return (
      <>
        <h1>My Favorite Watches</h1>
        <Row>
          {this.state.FavWatchArr.map(item => {
            return (
              <FavItem
                item={item}
                deleteItem={this.deleteItem}
                showUpdateForm={this.showUpdateForm}
              />
            )
          })}
        </Row>

        <UpdateModal
          show={this.state.showFlag}
          handleClose={this.handleClose}
          watchTitle={this.watchTitle}
          watchDescription={this.watchDescription}
          watchtoUSD={this.watchtoUSD}
          watchImage_URL={this.watchImage_URL}
          updateWatch={this.updateWatch}

        />

      </>
    )
  }
}

export default withAuth0(FavFruit);