import React from 'react';
function ShowAll(props){
    return (
        <div className="pokemon-inner-div">
             <img src={props.imgurl} className='image' alt={props.name}/>
              <h3 className='name'>{props.name}</h3>
              <p className="type">{props.type}</p>
        </div>
    )
}
export default ShowAll;