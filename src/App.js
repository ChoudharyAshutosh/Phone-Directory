import React,{Fragment,Component} from 'react';
import Header from './Header';
import './Formating.css'
class App extends Component {
  constructor(){
    super();
    this.state={
      subscribersList: []
    }
  }
  clickHandler(mess){
    alert(mess);
  }
  render(){
    /*let subscribers=[{
      name : "Ashutosh Choudhary",
      phone : "1234567890"
    },
    {
      name : "Ankit Chauhan",
      phone : "1234567891"
    }
  ]*/
  return (
    <Fragment>
      <Header heading="Phone Directory"/>
      <div className="container-body">
      <button className="success">Add</button>
      <div className="container">
        <span className="container-item heading">Name</span>
        <span className="container-item heading">Phone</span>
        </div>
        {this.state.subscribersList.map(sub=>{
        return <div className="container">
          <span className="container-item name">{sub.name}</span>
          <span className="container-item phone">{sub.phone}</span>
          <button className="danger" onClick={this.clickHandler.bind(this, "Clicked")}>Delete</button>
        </div>
      }

      )

      }
    
     </div>
    </Fragment>
  );
}}

export default App;
