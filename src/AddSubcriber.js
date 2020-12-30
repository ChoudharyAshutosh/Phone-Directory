import React,{Component} from 'react';
import Header from './Header';
import './AddSubscriber.css';
class AddSubscriber extends Component{
    constructor(){
        super();
        this.state={
            id: 0,
            name: "",
            phone: ""
        }
        console.log(this.state);    
        console.log("hsdbhsfbsfb");
    }
    inputChangeHandler= (e)=>{
       const state=this.state;
       state[e.target.name]=e.target.value;
       this.setState(state);
       console.log(this.state);
    }
    onFormSubmit(e){
        e.preventDefault();
        this.props.addSubscriberHandler(this.state);
        this.setState({id: 0,
            name: "",
            phone: ""});
    }
    render(){
        const {name, phone}=this.state;
        return(
            <div>
                <Header heading="Add Subscriber"/> 
                <div className="container-body">
                    <button className="back">Back</button>
                    <form className="subscriber" onSubmit={this.onFormSubmit.bind(this)}>
                        <label htmlFor="name" className="label-control">Name:</label><br/>
                        <input id="name" className="input-control" type="text" name="name" onChange={this.inputChangeHandler}></input><br/><br/>
                        <label htmlFor="phone" className="label-control">Phone</label><br/>
                        <input type="text" className="input-control" id="phone" name="phone" onChange={this.inputChangeHandler}></input><br/><br/>
                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber to be added:</span><br/>
                            <span className="subscriber-info">Name: {name}</span><br/>
                            <span className="subscriber-info">Phone: {phone}</span>
                        </div>
                        <button type="submit" className="success">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddSubscriber;