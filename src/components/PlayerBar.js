import React, { Component } from 'react';
import './PlayerBar.css';

class PlayerBar extends Component {
    render() {
        return(
            <section className="player-bar">
               <section id="buttons">
                 <button className="previous" onClick={this.props.handlePrevClick}>
                   <span className="icon ion-md-skip-backward"></span>
                </button>
                <button className="play-pause" onClick={this.props.handleSongClick} >
                  <span className={this.props.isPlaying ? 'icon ion-md-pause' : 'icon ion-md-play'}></span> 
                </button>
                <button className="next" onClick={this.props.handleNextClick}>
                  <span className="icon ion-md-skip-forward"></span>
                </button>
               </section>
               <section className="time-control">
                 <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
                 <input 
                  type="range" 
                  className="seek-bar" 
                  value={(this.props.currentTime / this.props.duration) || 0} 
                  max="1" 
                  min="0" 
                  step="0.01" 
                  onChange={this.props.handleTimeChange}
                  formatTime={this.props.formatTime}
                 />   
                 <div className="total-time">{this.props.formatTime(this.props.duration)}</div> 
               </section>
               <section className="volume-control">
                 <div className="icon ion-md-volume-low"></div>
                 <input
                   type="range"
                   className="seek-bar"
                   value={this.props.volume}
                   max="1"
                   min="0"
                   step="0.01"
                   onChange={this.props.handleVolumeChange}
                />
                <div className="icon ion-md-volume-high"></div>
               </section>
            </section>
        );
    }
}


export default PlayerBar;  
