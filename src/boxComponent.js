import React from 'react';
import './App.css';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


class Box extends React.Component {
  constructor(){
    super()
    this.getFace = this.getFace.bind(this)
  }


  getFace(face){
    switch(face){
      case 'north': {
        return(<ArrowUpwardIcon/>)
      }
      case 'east': {
        return(<ArrowForwardIcon/>)
      }
      case 'west': {
        return(<ArrowBackIcon/>)
      }
      case 'south': {
        return(<ArrowDownwardIcon/>)
      }
      default:
        break;
    }
  }

    render(){
        return(
            <div className={
              (this.props.x == this.props.value.x && this.props.y == this.props.value.y)?
              'selected box' : 'box'
            }>
              <span>{this.props.value.x},</span>
              <span>{this.props.value.y}</span>
              <div className="arrowHolder">
                {(this.props.x == this.props.value.x && this.props.y == this.props.value.y)?
                  this.getFace(this.props.face) : null
                }
              </div>
          </div>
        )
    }
}

export default Box