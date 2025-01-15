import { defineStore } from "pinia";
export const useRecettesStore = defineStore({
  id: "recette",
  //state/etat
  state: () => ({
    recettes: [
      {
        id: 1,
        name: "Pizza",
        description: "Une bonne pizza",
        image: "https://www.pizzahut.fr/images/pizza/pizza-margherita.png",
        note: 4,
      },
      {
        id: 2,
        name: "Poulet",
        description: "Du poulet",
        image: "https://www.pizzahut.fr/images/pizza/pizza-margherita.png",
        note: 3,
      },
    ],
    //getters
    getters: {
      getRecettes: (state) => state.recettes,
      getRecetteById: (state) => (id: number) => {
        return state.recettes.find((recette) => recette.id === id);
      },
      getFirstRecette: (state) => state.recettes[0],
    },
  }), //fin du state
});
