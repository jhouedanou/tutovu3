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
      {
        id: 3,
        name: "Couscous",
        description: "Un délicieux couscous royal",
        image: "https://exemple.com/couscous.jpg",
        note: 5,
      },
      {
        id: 4,
        name: "Ratatouille",
        description: "Un plat traditionnel provençal",
        image: "https://exemple.com/ratatouille.jpg",
        note: 4,
      },
      {
        id: 5,
        name: "Quiche Lorraine",
        description: "Une quiche crémeuse aux lardons",
        image: "https://exemple.com/quiche.jpg",
        note: 4,
      },
      {
        id: 6,
        name: "Boeuf Bourguignon",
        description: "Un classique de la cuisine française",
        image: "https://exemple.com/boeuf-bourguignon.jpg",
        note: 5,
      },
    ],
  }), //fin du state
  //getters
  getters: {
    getRecettes: (state) => state.recettes,
    getRecetteById: (state) => (id: number) => {
      return state.recettes.find((recette) => recette.id === id);
    },
    getFirstRecette: (state) => state.recettes[0],
  },
  //actions
  actions: {
    resetStore() {
      this.recettes = [];
    },
    deleteRecette(itemId: number) {
      this.recettes.splice(
        this.recettes.findIndex(function (i) {
          return i.id === itemId;
        }),
        1
      );
    },
    updateRecette(item: any) {
      const foundIndex = this.recettes.findIndex(function (i) {
        return i.id === item.id;
      });
      if (foundIndex !== -1) {
        this.recettes[foundIndex] = item;
      } else {
        item.id = Math.random().toString(16).slice(2); //id unique
        this.recettes[this.recettes.length] = item;
      }
    },
  },
});
