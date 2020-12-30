import React, { Fragment, Component } from 'react';
import Header from './Header';
import './ShowSubscribers.css';
import { Link } from 'react-router-dom';
class ShowSubscribers extends Component {

  render() {
    return (
      <Fragment>
        <Header heading="Phone Directory" />
        <div className="container-body">
          <Link to="/add"><button className="success">Add</button></Link>
          <div className="container">
            <span className="container-item heading">Name</span>
            <span className="container-item heading">Phone</span>
          </div>
          {this.props.subScribersList.map(sub => {
            return <div className="container" key={sub.id}>
              <span className="container-item name">{sub.name}</span>
              <span className="container-item phone">{sub.phone}</span>
              <button className="danger" onClick={this.props.deleteSubscriberHandler.bind(sub.id)}>Delete</button>
            </div>
          }

          )

          }

        </div>
      </Fragment>
    );
  }
}

export default ShowSubscribers;
