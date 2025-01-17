import recettesData from '@/data/recettes.json'

export const recettesAPI = {
  getAll() {
    return Promise.resolve(recettesData)
  },
  
  getById(id: number) {
    const recette = recettesData.find(r => r.id === id)
    return Promise.resolve(recette)
  }
}
