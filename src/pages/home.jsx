import { useState, useEffect } from 'react'
import { fetchData } from '../helper/fetchData'
import PokemonCard from '../components/pokemonCard';
import Buttons from '../components/buttons';
import Loader from '../components/loader';

export default function Home() {

    const [pokemons, setPokemons] = useState([]);
    const [loader, setLoader] = useState(false);
    const [offset, setOffest] = useState(1);

    useEffect(() => {
        getPokemonsData(offset);
    }, [offset]);

    const getPokemonsData = async (offset) => {
        const pokeApi = [];
        setLoader(true);
        for (let i = offset; i <= offset + 8; i++) {
            const pokemon = await fetchData(i);
            pokeApi.push(pokemon);
        };
        setPokemons(pokeApi);
        setLoader(false);
    };

    const NextPage = () => {
        setOffest(offset + 9);
    };

    const PreviousPage = () => {
        if (offset != 1) {
            setOffest(offset - 9);
        };
    };

    return (
        <article className="container">
            {
                loader
                    ? (<Loader />)
                    : (
                        <>
                            <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
                                {
                                    pokemons.map(
                                        (pokemon, index) => (
                                            <PokemonCard key={index} pokemon={pokemon} />
                                        )
                                    )
                                }
                            </div>
                            <Buttons offset={offset} PreviousPage={PreviousPage} NextPage={NextPage} />
                        </>
                    )
            }
        </article>
    )
};