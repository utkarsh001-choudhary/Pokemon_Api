import React, { useEffect, useState } from 'react';
import ShowAll from './showAll';
const App=()=>{
  const [pokemons,setPokemons]=useState([]);
  const [loading,setLoading]=useState(true);
   useEffect(()=>{
        GetPokemon();
   },[])
     const GetPokemon = async ()=>{
       for( let i=1;i<=20;i++)
       {
         const url=`https://pokeapi.co/api/v2/pokemon/${i}`
         const res= await fetch(url);
         const data =  await res.json();
         setPokemons(preValue=>[...preValue,data]);
       }
       setLoading(false);
     }
  function ShowPoekemon(pokemon)
   { const name=pokemon.name;
     const id=pokemon.id;
      const type=pokemon.types[0].type.name;
      const imgurl=pokemon.sprites.front_default;
      return (
       <ShowAll key={id} name={name} imgurl={imgurl}  id={id} type={type}/> )
  }
  return (
       <div className='outer-div'>
      
        <h1 className='main-heading'>PokeCart</h1>
       
        {loading===false&& <div className='pokemon-outer-div'>
         {console.log(pokemons)}
         {pokemons.map(ShowPoekemon)}
         </div>}
      </div>
  )
}
export default App;