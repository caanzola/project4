import React from 'react';
import { Link } from 'react-router-dom';

class DoodleBox extends React.Component{
  render(){
    return (
      <div className="card hitbox">
        <Link to='/'><img className="card-img-top" src="http://placehold.it/400x300" alt="Card image cap"/></Link>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">
            <small className="rostext">
              20 de octubre de 2008
            </small>
            <a href="#" className="badge badge-warning float-right">
             Uniandes
            </a>
          </h6>
          <Link to='/'><h5 className="card-title title">Día de los Árboles 2008</h5></Link>
        </div>
      </div>
    );
  }
}

export default DoodleBox;
