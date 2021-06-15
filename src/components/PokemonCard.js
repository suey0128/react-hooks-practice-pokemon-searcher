import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  //  console.log(pokemon)
  //state var to toggle front back
  const [isFront, isFrontSetter] = useState(true)

  return (
    <Card>
      <div>
       {isFront ? 
        <div className="image" onClick={()=>{isFrontSetter(!isFront)}}>
          <img src={pokemon.sprites.front} alt="oh no!" />
        </div>
       :
        <div className="image" onClick={()=>{isFrontSetter(!isFront)}}>
          <img src={pokemon.sprites.back} alt="oh no!" />
        </div>
       }

        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>

        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>

    </Card>
  );
}

export default PokemonCard;
