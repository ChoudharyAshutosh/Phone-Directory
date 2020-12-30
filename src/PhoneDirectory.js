import React, { Component } from "react";
import AddSubscriber from './AddSubcriber';
import ShowSubscribers from './ShowSubscribers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class PhoneDirectory extends Component {
    constructor() {
        super();
        this.state = { subscriberslist: [] };
    }
    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.subscriberslist;
        if (subscribersList.length > 0) {
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        }
        else {
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({ subscriberslist: subscribersList });
    }
    deleteSubscriberHandler = (subscriberId) => {
        let SubscriberList = this.state.subscriberslist;
        let Subscriberindex = 0;
        SubscriberList.forEach((subscriber, index) => {
            if (subscriber.id === subscriberId)
                Subscriberindex = index;
        })
        SubscriberList.splice(Subscriberindex, 1);
        this.setState({ subscriberslist: SubscriberList });
    }
    render() {
        return (
            <Router>
                <Route exact path="/" render={(props) => <ShowSubscribers {...props} subScribersList={this.state.subscriberslist} deleteSubscriberHandler={this.deleteSubscriberHandler} />} />
                <Route exact path="/add" render={({ history }, props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler} />} />


            </Router>
        );
    }
}
export default PhoneDirectory;