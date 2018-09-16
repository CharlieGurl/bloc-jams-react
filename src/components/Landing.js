import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'; 
import './Landing.css';


  const Landing = () => (
      <Grid>
        <Jumbotron>
          <h1> Turn the Music Up!</h1> 
          <Row className="show-grid text-center">
            <Col xs={10} sm={4} className="dj-wrapper">
              <Image src="assets/dj.jpg" square className="dj-pic" />
            </Col>
          </Row>
        </Jumbotron>
        <Jumbotron>
          <h2> Choose your Music</h2>
          <p> The world is full of music; why should you have to listen to music that someone else chose?</p> 

           <h2>Unlimited, streaming, ad-free</h2>
           <p>No arbitrary limits. No distractions.</p>
         
           <h2>Mobile enabled</h2>
           <p>Listen to your music on the go. Ths streaming service is available on all mobile platforms</p>
    
          <Link to='/Library'>
            <Button bsStyle="primary">Albums</Button> 
          </Link>
        </Jumbotron>
      </Grid> 
    );




/*const Landing = () => (
    <section className="landing">
      <h1 className="hero-title">Turn the music up!</h1>
      <section className="selling-points">
        <div className="point">
          <h2 className="point-title">Choose your music</h2>
          <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
        </div>
        <div className="point">
          <h2 className="point-title">Unlimited, streaming, ad-free</h2>
          <p className="point-description">No arbitrary limits. No distractions.</p>
        </div>
        <div className="point">
          <h2 className="point-title">Mobile enabled</h2>
          <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms</p> 
        </div>
      </section>
    </section>
);*/

export default Landing; 