import React from 'react';

function Player(){
    return (
        <div className='contenedor-player'>
            <img className='imagen-player'
            src={require('../imagenes/messi.jpg')}
            alt='Foto de Messi'/>
            <div className='info-player'>
                <p className='nombre-player'>Lionel Andrés Messi Cuccittini</p>
                <p className='posicion-player'>Delantero/Mediocampista</p>
                <p className='biografia'>Conocido como Leo Messi, es un futbolista argentino que juega como delantero o centrocampista. Jugador histórico del Fútbol Club Barcelona, al que estuvo ligado veinte años, desde 2021 integra el plantel del Paris Saint-Germain de la Ligue 1 de Francia. Es también internacional con la selección de Argentina, equipo del que es capitán.</p>
            </div>
        </div>
    );
}

export default Player;