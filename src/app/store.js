import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../features/myPokemos/pokemonSlices'

export const store = configureStore({
    reducer: {
        myPokemons: pokemonReducer,
    },
});