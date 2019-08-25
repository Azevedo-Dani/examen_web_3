import React from 'react';
import { Alert } from 'react-bootstrap';
import sendApiRequest from '../../utils/api'
class DashboardClassComponent extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        user: ''
      }     
  }

  fetchUser() {
    sendApiRequest({url:'/users'}).then(resp => {
      this.setState({
        user: resp.firstName
      })
    }).catch(err => {
      this.setState({
        user: 'ERROR'
      })
    })
  }
  componentDidMount() {
    setTimeout(this.fetchUser.bind(this), 2000)
  }

  render(){
    return (
      <Alert variant='info'>
        Hello ! {this.state.user}
      </Alert>
    );
  }
}

export default DashboardClassComponent;

