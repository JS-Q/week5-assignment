import React, {useState, useEffect} from "react";
import ListItem from "./list-item";

export default function List(props) {
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => {
        setPokemonList(data.results);
        setLoading(false);
      })
      .catch(_error => {
        setLoading(false);
        setError(true);
      });
  }, [loading]);

  let content = <></>;
  if (error) content = <h1>ERROR</h1>;
  if (!error && !loading) {
    content = <>
      <h1>Hello, Trainer</h1>
      {pokemonList.map((item, index) =>
        <ListItem key={index} item={item}></ListItem>
      )}
    </>;
  }

  return content;
}
