import React from 'react'
import Compteur from './Compteur'

function Footer(props) {
	return (
		<div className='flexlist'>
			<h1>{props.param1}</h1>
			<Compteur />
		</div>
	)
}

export default Footer
