import React from 'react';
import {Provider} from "react-redux";
import store from "./store.js";
import Jugadores from "./components/Jugadores.jsx";
import EquipoSeleccionado from "./components/EquipoSeleccionado.jsx";
import "./style/style.css";

const App=()=>(
  <Provider store={store}>
        <main>
         <h1>Equipo de Futbol</h1>
            <Jugadores />
            <EquipoSeleccionado/>
      </main>
  </Provider>
 )

export default App;
