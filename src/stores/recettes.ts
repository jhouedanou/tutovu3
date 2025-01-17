import { defineStore } from "pinia"
import { recettesAPI } from '@/api/recettes'

export const useRecettesStore = defineStore({
  id: "recette",
  state: () => ({
    recettes: [],
    isLoading: false
  }),
  
  actions: {
    async fetchRecettes() {
      this.isLoading = true
      try {
        this.recettes = await recettesAPI.getAll()
      } finally {
        this.isLoading = false
      }
    },
    
    async fetchRecetteById(id: number) {
      return await recettesAPI.getById(id)
    }
  },

  getters: {
    getRecettes: (state) => state.recettes,
    getRecetteById: (state) => (id: number) => {
      return state.recettes.find((recette) => recette.id === id)
    },
    getFirstRecette: (state) => state.recettes[0]
  }
})
