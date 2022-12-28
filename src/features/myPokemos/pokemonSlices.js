import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    myPokemons: [],
};

export const pokemonSlice = createSlice({
    name: "Pokemons",
    initialState,
    reducers: {
        addFavorites: (state, action) => {
            const foundPokemon = state.myPokemons.find(p => p.id === action.payload.id);
            if(!foundPokemon){
                state.myPokemons = [...state.myPokemons, action.payload]
            } else{
                console.log(`${action.payload.name} is already added`)
            }
        },
        removeFavorites: (state, action) => {
            const foundPokemon = state.myPokemons.find(p => p.id === action.payload);
            if(foundPokemon){
                state.myPokemons = state.myPokemons.filter(p => p.id !== foundPokemon.id);
            } else{
                console.log("Pokemon not found");
            }
        },
    },
});

export const { addFavorites, removeFavorites } = pokemonSlice.actions;
export default pokemonSlice.reducer;