import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import PokemonDetail from "../components/pokemonDetail";
import { fetchData } from "../helper/fetchData";

export default function Detail(){

    const { pokemon, specie } = useLoaderData();

    return(
        <div className="container">
            <PokemonDetail pokemon={pokemon} specie={specie}/>
        </div>
    );
};

export async function LoaderDetail({ params }){
    const pokemon = await fetchData(params.id);
    const getSpecie = await fetch(pokemon.species.url);
    const specie = await getSpecie.json();
    return {
        pokemon,
        specie,
    };
};