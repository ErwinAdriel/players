import React from 'react';
import '../hojas-de-estilo/Player.css';

function Player(props){
    return (
        <div className='contenedor-player'>
            <img className='imagen-player'
            src={require(`../imagenes/${props.imagen}.jpg`)}
            alt='Foto de Messi'/>
            <div className='info-player'>
                <p className='nombre-player'>{props.nombre}</p>
                <p className='posicion-player'>{props.posicion}</p>
                <p className='biografia'>{props.biografia}</p>
            </div>
        </div>
    );
}

export default Player;