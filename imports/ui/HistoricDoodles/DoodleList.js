import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';

import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './../layouts/Navbar';
import Footer from './../layouts/Footer';
import DoodleBox from './DoodleBox';
import DoodleBoxComunity from './DoodleBoxComunity';

//server imports
import { doodles } from './../../api/doodles';


class DoodleList extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      doodle: []
    };
  }
  componentDidMount(){
    document.body.background = '';
    document.body.style.backgroundRepeat = '';
    document.body.style.backgroundSize = '';

    this.doodlesTracker = Tracker.autorun(()=>{
      Meteor.subscribe('doodles');
       const doodle = doodles.find({}).fetch();
       console.log(doodle);
       this.setState({ doodle });
    });
  }
  componentWillUnmount(){
    this.doodlesTracker.stop();
  }
  renderDoodlesList(){
    return this.state.doodle.map((doodle)=>{
      return <p key={ doodle._id }>{ doodle.parrafo }</p>
    });
  }
  render(){
    return (
      <div>
        <Navbar/>
        <br/>
          {this.renderDoodlesList()}
        <br/>
        <div className="container">
          <div className="row">
          <div className="card-deck">
            <DoodleBox/>
            <DoodleBox/>
            <DoodleBox/>
          </div>
          </div>
          <br/>
          <div className="row">
          <div className="card-deck">
            <DoodleBoxComunity/>
            <DoodleBoxComunity/>
            <DoodleBoxComunity/>
          </div>
          </div>
        </div>
        <br/>
        <Footer/>
      </div>
    );
  }
}

export default DoodleList;
