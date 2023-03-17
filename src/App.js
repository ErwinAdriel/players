import logo from './logo.svg';
import './App.css';
import Player from './componentes/Player.js';

function App() {
  return (
    <div className="App">
        <div className='contenedor-principal'>
          <h1>Selección Argentina</h1>
          <Player
            imagen='messi'
            nombre='Lionel Andrés Messi Cuccittini'
            posicion='Delantero/Mediocampista'
            biografia='Conocido como Leo Messi, es un futbolista argentino que juega como delantero o centrocampista. Jugador histórico del Fútbol Club Barcelona, al que estuvo ligado veinte años, desde 2021 integra el plantel del Paris Saint-Germain de la Ligue 1 de Francia. Es también internacional con la selección de Argentina, equipo del que es capitán.'
          />
          <Player
            imagen='alvarez'
            nombre='Julián Álvarez'
            posicion='Delantero'
            biografia='Surgió en Club Atlético Calchín, pero se formó y debutó profesionalmente en C. A. River Plate. En esta etapa ganó seis títulos profesionales. En 2021 se convirtió en el goleador del torneo de Primera División de Argentina con dieciocho goles y ganó varios premios individuales, siendo el más resaltante el del futbolista del año en Sudamérica.'
          />
          <Player
            imagen='martinez'
            nombre='Lautaro Javier Martínez'
            posicion='Delantero centro'
            biografia='Inició su carrera en su natal Argentina, debutando profesionalmente en 2015 con Racing Club. Permaneció cuatro temporadas en el equipo y llegó a representarle en liga y Copa Libertadores, totalizando 27 goles en 62 partidos antes de unirse al Inter de Milán a cambio de 27 millones de euros en 2018.'
          />
        </div>
        
    </div>
  );
}

export default App;
