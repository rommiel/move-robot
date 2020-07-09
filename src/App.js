import React from 'react';
import './App.css';
import Box from './boxComponent';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      face: 'north',
      x: null,
      y: null,
      face: null,
      isOpen: false,
      showButton: false,
      reportOpen: false,
      start: false,
      box: [
        {x:0,y:4},
        {x:1,y:4},
        {x:2,y:4},
        {x:3,y:4},
        {x:4,y:4},//1
        {x:0,y:3},
        {x:1,y:3},
        {x:2,y:3},
        {x:3,y:3},
        {x:4,y:3},//2
        {x:0,y:2},
        {x:1,y:2},
        {x:2,y:2},
        {x:3,y:2},
        {x:4,y:2},//3
        {x:0,y:1},
        {x:1,y:1},
        {x:2,y:1},
        {x:3,y:1},
        {x:4,y:1},//4
        {x:0,y:0},
        {x:1,y:0},
        {x:2,y:0},
        {x:3,y:0},
        {x:4,y:0},//5
      ]
    }

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleMove = this.handleMove.bind(this)
    this.handleRight = this.handleRight.bind(this)
    this.handleLeft = this.handleLeft.bind(this)
    this.handleReport = this.handleReport.bind(this)
    this.reportClose = this.reportClose.bind(this)
  }

  handleOpen(){
    this.setState({'isOpen': true})
  }

  handleClose(){
    this.setState({'isOpen': false})
  }

  handleConfirm(){
    this.setState({'isOpen': false})
    let x = parseInt(document.getElementById('inputx').value)
    let y = parseInt(document.getElementById('inputy').value)
    let face = document.getElementById('face').value
    if(!x)
      x = 0
    if(!y)
      y = 0

    if((x<0 || x>4) || (y<0 || y>4))
      alert("invalid values")  
    else 
      this.setState({
        'x': x,
        'y': y,
        'face': face,
        showButton: true
      })
  }


  handleMove(){
    let x = this.state.x
    let y = this.state.y
    let face = this.state.face

    if(x == 0 && face == 'west'){
     alert("Robot will fall. Action not permitted!")
    }
    else if(x == 4 && face == 'east'){
     alert("Robot will fall. Action not permitted!")
    }
    else if(y == 0 && face == 'south'){
     alert("Robot will fall. Action not permitted!")
    }
    else if(y == 4 && face == 'north'){
     alert("Robot will fall. Action not permitted!")
    }
    else{
      switch(face){
        case 'north': {
                      this.setState({'y': y+1})
                      break;
                    }
        case 'east': {
                      this.setState({'x': x+1})
                      break;
                    }
        case 'south': {
                      this.setState({'y': y-1})
                      break;
                    }
        case 'west': {
                      this.setState({'x': x-1})
                      break;
                    }
        default: break;
      }
    }
  }

  handleRight(){
    let face = this.state.face
    switch(face){
      case 'north': {
                    this.setState({'face': 'east'})
                    break;
                  }
      case 'east': {
                    this.setState({'face': 'south'})
                    break;
                  }
      case 'south': {
                    this.setState({'face': 'west'})
                    break;
                  }
      case 'west': {
                    this.setState({'face': 'north'})
                    break;
                  }
      default: break;
    }
  }

  handleLeft(){
    let face = this.state.face
    switch(face){
      case 'north': {
                    this.setState({'face': 'west'})
                    break;
                  }
      case 'west': {
                    this.setState({'face': 'south'})
                    break;
                  }
      case 'south': {
                    this.setState({'face': 'east'})
                    break;
                  }
      case 'east': {
                    this.setState({'face': 'north'})
                    break;
                  }
      default: break;
    }
  }

  handleReport(){
    this.setState({'reportOpen': true})
  }

  reportClose(){
    this.setState({
      'x':null,
      'y':null,
      'face':null,
      'showButton':false,
      'reportOpen': false
    })
  }


  render(){
    const box = []

    for(const [index, value] of this.state.box.entries()){
      box.push(<Box value={value} key={index} index={index} face={this.state.face} x={this.state.x} y={this.state.y}/>)
    }

    return (
      <div className="container">
        <h1 style={{marginTop: '50px'}}>Move Robot</h1>
              
      {
        this.state.start?
        <div>
            <div className="box-container">
            {box}
            </div>

            <Button variant="contained" onClick={this.handleOpen} style={{marginTop: '20px'}}>
              Place Robot
            </Button>
            {
            this.state.showButton?
              <span>
                <Button variant="contained" onClick={this.handleMove} style={{marginTop: '20px', marginLeft: '20px'}}>
                  MOVE
                </Button>
                <Button variant="contained" onClick={this.handleLeft} style={{marginTop: '20px', marginLeft: '20px'}}>
                  LEFT
                </Button>
                <Button variant="contained" onClick={this.handleRight} style={{marginTop: '20px', marginLeft: '20px'}}>
                  RIGHT
                </Button>
                <Button variant="contained" onClick={null} style={{marginTop: '20px', marginLeft: '20px'}}
                  onClick={this.handleReport}
                >
                  REPORT
                </Button>
              </span>
              :
              null
            }  
        </div>
        :
        <Button onClick={()=>this.setState({'start': true})} variant="contained" color="primary" style={{width: '90%', height: '100px', margin: '20px auto 20px', fontSize: '35px'}}>START</Button>
      }

          <h6 style={{marginTop: '20px'}}>Instructions:</h6>
          <ul style={{fontSize: '13px'}}>
            <li style={{marginTop: '10px'}}>Click the "PLACE ROBOT" button and input the POSITION where the Robot is facing, X and Y coordinates and for the Robot's starting position</li>
            <li style={{marginTop: '10px'}}>Click *"MOVE" button to make the Robot move forward to the direction it face.</li>
            <li style={{marginTop: '10px'}}>Click *"LEFT" or *"RIGHT" button to change the Robot's facing direction accordingly while retaining its current X and Y position.</li>
            <li style={{marginTop: '10px'}}>Click *"REPORT" button to inform the user the current location and the direction that the Robot is currently facing.</li>
          </ul>
          <small style={{fontSize: '10px'}}>* This buttons will be shown upon giving the Robot's initial position.</small>
          <br/>
          <small style={{fontSize: '10px'}}>** After clicking REPORT button, the Robot will leave the area.</small>
          <br/>
          <small style={{fontSize: '10px'}}>*** If you didn't put X and Y coordinate, it will automatically place to 0,0.</small>

          <Modal
            open={this.state.isOpen}
            onClose={this.handleClose}
          >
            <div className="paperModal">
              {/* <TextField id="inputx" label="X" type="number" variant="outlined" margin="normal"/>
              <TextField id="inputy" label="Y" type="number" variant="outlined" placeholder={this.state.y} margin="normal"/> */}
              <label htmlFor="X">X: </label>
              <input type="number" min="0" max="4" id="inputx"/>
              <br/>
              <label htmlFor="Y">Y: </label>
              <input type="number" min="0" max="4" id="inputy"/>
              <br/>
              <label htmlFor="FACING">FACING: </label>
              <br/>
              <select id="face" name="face" className="width100">
                <option value="north">North</option>
                <option value="east">East</option>
                <option value="west">West</option>
                <option value="south">South</option>
              </select>
              <br/>
              <br/>
              <Button variant="contained" color="primary" onClick={this.handleConfirm}>
                confirm
              </Button>
            </div>
          </Modal>
          

          <Modal
            open={this.state.reportOpen}
            onClose={this.reportClose}
            disableBackdropClick
          >
            <div className="paperModal" style={{height:'130px'}}>
              <p>
                Robot is on X: {this.state.x} and Y: {this.state.y} facing: {this.state.face}
              </p>
              <Button variant="contained" color="secondary" onClick={this.reportClose}>
                CLOSE
              </Button>
            </div>
          </Modal>
        </div>

    )
  }
}

export default App;
