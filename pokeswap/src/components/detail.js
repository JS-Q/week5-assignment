import React, {useState, useEffect} from "react";
// props.match.params.id
export default function Detail(props) {
  const [pokemon, setPokemon] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.match.params.id}`)
      .then(response => response.json())
      .then(data => {
        setPokemon(data);
        setLoading(false);
      })
      .catch(_error => {
        setLoading(false);
        setError(true);
      });
  });

  let content = <></>;
  if (error) content = <h1>ERROR</h1>
  if (!error && !loading) {
    content = <>
      <h1>{pokemon.species.name}</h1>
        Ability: {pokemon.abilities[0].ability.name}
        <b></b>
        Base Experience: {pokemon.base_experience}
        <b></b>
        Height: {pokemon.height}
        <b></b>
        Move: {pokemon.moves[0].move.name}
    </>;
  }
  return content;
}
