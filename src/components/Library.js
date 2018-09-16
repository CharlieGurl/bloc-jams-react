import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
//import { Grid, Col, Image } from 'react-bootstrap';
import './Library.css';


class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }


  render () {
    return (
      <section className='card-deck justify-content-around pt-5'> 
        {this.state.albums.map( (album, index) =>     
           <Link className='nav-link' to={`/album/${album.slug}`} key={index}>
            <div className='card-border'>
              <img className='lib-image' src={album.albumCover} alt={album.title} />
              <div className='card-body'>
                <h2 className='card-title'>{album.title}</h2>
                <h3 className='card-subtitle'>{album.artist}</h3>
                <p className='card-text'>{album.songs.length} songs</p>
              </div>
            </div>

            </Link>
        )}
          
      </section> 
    );
  }
}
export default Library 