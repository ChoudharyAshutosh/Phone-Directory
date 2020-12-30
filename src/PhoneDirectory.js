import React,  { Component } from "react";
import AddSubscriber from './AddSubcriber';
import ShowSubscribers from './ShowSubscribers';
class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state={subscriberslist:[
            {
                id: 1,
                name : "ASHU",
                phone: "1234560789"
            },
            {
                id: 2,
                name: "ASH",
                phone: "7410258963"
            }
        ]};
    }
    addSubscriberHandler= (newSubscriber)=>{
        let subscribersList=this.state.subscriberslist;
        if(subscribersList.length>0){
            newSubscriber.id=subscribersList[subscribersList.length-1].id+1;
        }
        else{
            newSubscriber.id=1;
        }
        subscribersList.push(newSubscriber);
        this.setState({subscriberslist: subscribersList});
        console.log(this.state.subscriberslist);
    }
    render(){
        return(
            //<AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
            <ShowSubscribers subScribersList={this.state.subscriberslist}/>
        );
    }
}
export default PhoneDirectory;