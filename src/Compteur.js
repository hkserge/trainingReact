import React, { Component } from 'react'

class Compteur extends Component {
	state = {
		clickNb: 0,
		texte: ''
	}
	clear = () => {
		this.setState({
			clickNb: 0,
			texte: ''
		})
	}
	incr = () => {
		this.setState({ clickNb: this.state.clickNb + 1 })
	}
	entree = (event) => {
		this.setState({ texte: event.target.value })
	}
	render() {
		return (
			<div>
				<button onClick={this.incr}>Ok</button>
				<p>Vous avez cliqué : {this.state.clickNb}</p>
				<p>{this.state.texte}</p>
				<input type='text' value={this.state.texte} onChange={this.entree} />
				<button onClick={this.clear}>Clear</button>
			</div>
		)
	}
}

export default Compteur
