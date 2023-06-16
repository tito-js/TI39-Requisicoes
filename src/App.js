import React from 'react';
import axios from 'axios';

import "./App.css"

function App() {

	const [ pokemons, alteraPokemons ] = React.useState( [] );
	const [ txtPokemon, alteraTxtPokemon ] = React.useState("");

	function buscaPokemon(){
		// ATIVIDADE!
		// ---- Etapa 1
		// Fazer uma requisição para o endereço abaixo:
		// https://pokeapi.co/api/v2/pokemon/?????
		// Onde está o ???? troque pelo nome do Pokemon digitado pela pessoa
		// Ao final, você deve mostrar apenas o Pokemon digitado
		// SE a pessoa digitar um pokemon que não existe, mostre uma mensagem

		// ---- Etapa 2
		// SE a pessoa não digitar nada, ou seja, enviar o campo vazio:
		//    -> Volte a mostrar todos os pokemons



	}

	function buscaTodosPokemons(){
		// pokemon 		   -> Busca todos pokemons
		// pokemon?limit=X -> busca todos com um numero limite
		// pokemon/nome    -> busca um pokemon específico

		axios.get("https://pokeapi.co/api/v2/pokemon?limit=50")
		.then( response => { // Será executado quando a requisição terminar
			console.log("Requisição bem sucedida!");
			alteraPokemons( response.data.results );
			console.log(response.data.results)
		} )  
		.catch( response => { // É executado quando dá erro na requisição
			console.log("Deu ruim na requisição");
			console.log(response);
		} ) 
		
	}

	// if( pokemons.length == 0 ){
	// 	buscaTodosPokemons();
	// }

	React.useEffect( ()=>{
		buscaTodosPokemons();
	}, [] );

	return (
		<div>

			<h1> Conradito PokéDex </h1>
			<p> Conheça os Pokémons mais famosos </p>


			<input onChange={ (e)=> alteraTxtPokemon( e.target.value ) } placeholder="Digite o nome de um Pokémon" />
			<button onClick={ ()=> buscaPokemon() } >Buscar</button>


			{
				pokemons.map( (pokemon, index) =>
					<div>
						<p> { pokemon.name } </p>
						<img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/"+( pokemon.id ? pokemon.id : index+1)+".gif"} />
					</div>	
				)
			}

		</div>
	);
}

export default App;