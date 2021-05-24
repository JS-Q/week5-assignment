import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"

export default function ListItem({item}) {
  const [pokemon, setPokemon] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(item.url)
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
      {/* <h4>{pokemon.species.name}</h4> */}
      <Link to={`/detail/${pokemon.species.name}`}><h4>{pokemon.species.name}</h4></Link>
    </>;
  }
  return content;
}

ListItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
}
