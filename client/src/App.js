import React from 'react';
import Timeline from './component/Timeline';
import Event from './component/event'
import Dateholder from './component/Dateholder';
import AddShift from './component/addShift';
import moment from 'moment';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      datee: moment(),
      addShit: false
     };

    this.subDate = this.subDate.bind(this);
    this.rightClick = this.addDate.bind(this);
    this.addShift = this.addShift.bind(this);
    this.closeAddShift = this.closeAddShift.bind(this);
  }

  addShift(){
    console.log("add shift");
    //TODO: Add new Shift
    this.setState({
      addShit: !this.state.addShit
    })
  }
  
  subDate(){
    this.setState({
      datee: this.state.datee.subtract(1, "days")
    })
  }

  addDate(){
    this.setState({
      datee: this.state.datee.add(1, "days")
    })
  }

  closeAddShift(){
    this.setState({
      addShit: false
    })
  }

  render() {
    return ( 
      <div className="App">
        <div className={this.state.addShit ? "show-add-shift" : "hide-add-shit"}  >
            <AddShift closeClick={() => this.closeAddShift()} />
        </div>
        <div className="calendar">
          <Timeline />

          <div className="days">

            <div className="day">

              <Dateholder 
                datenum={this.state.datee.format('D')} 
                datename={this.state.datee.format('dddd')} 
                datemontyear={this.state.datee.format('MMMM - YYYY')} 
                addShift={() => this.addShift()}
                leftClick={() => this.subDate()}
                rightClick={() => this.addDate()}
              />

              <Event date={this.state.datee} />
             
            </div>
          </div> 
        </div>

      </div>
    );
  }
}

export default App;






