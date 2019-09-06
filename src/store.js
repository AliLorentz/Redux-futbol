import {createStore} from "redux"

const initialState = {
	jugadores:[{
		id:1,
		nombre:"Juan Carlos",
		foto:"https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg"
	},
	{
		id:2,
		nombre:"Elvan Quito",
		foto:"https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg"
	},
	{
		id:3,
		nombre:"Rosa Melano",
		foto:"https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg"
	},{
		id:4,
		nombre:"Juan Carlos",
		foto:"https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg"
	},
	{
		id:5,
		nombre:"Elvan Quito",
		foto:"https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg"
	}],
	titulares:[],
	suplentes:[]
}


const reducerEntrenador = (state = initialState ,action) => {
	if(action.type === "AGREGAR_TITULAR"){
		return {
			...state,
			titulares:state.titulares.concat(action.jugador),
			jugadores:state.jugadores.filter(j=>j.id !== action.jugador.id)
		}
	}

	if(action.type === "AGREGAR_SUPLENTE"){
		return{
			...state,
			suplentes:state.suplentes.concat(action.jugador),
			jugadores:state.jugadores.filter(j=>j.id !== action.jugador.id)
		}
	}

	if(action.type === "QUITAR_TITULAR"){
		return{
			...state,
			titulares:state.titulares.filter(j=>j.id !== action.jugador.id),
			jugadores:state.jugadores.concat(action.jugador)
		}
	}

		if(action.type === "QUITAR_SUPLENTE"){
		return{
			...state,
			suplentes:state.suplentes.filter(j=>j.id !== action.jugador.id),
			jugadores:state.jugadores.concat(action.jugador)
		}
	}
	return state
}


export default createStore(reducerEntrenador)