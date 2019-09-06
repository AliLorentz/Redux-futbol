import React from 'react';
import {connect} from "react-redux";


const Suplentes = ({suplentes,quitarSuplentes}) => (
	<section>
		<h2>Suplentes</h2>
		<div className="suplentes">
			{
				suplentes.map(j => (
					<article className="suplente" key={j.id}>
						<div>
							<img src={j.foto}/>
						</div>
						<button onClick={()=>quitarSuplentes(j)} >X</button>
						<p>{j.nombre}</p>
					</article>

				))
			}
		</div>
	</section>

)

const mapStateToProps = state =>({
	suplentes:state.suplentes
})

const mapDispatchToProps = dispatch =>({
	quitarSuplentes(jugador){
		dispatch({
			type:"QUITAR_SUPLENTE",
			jugador
		})
	}

})

export default connect(mapStateToProps,mapDispatchToProps)(Suplentes);