import { clientFetch } from '../clientFetch'

export const getFavoritePlaces = async () => {
  const response = await clientFetch.get('/points')
  return response.data
}

export const addFavoritePlace = async (placeData) => {
  const response = await clientFetch.post('/points', placeData)
  return response.data
}

export const updateFavoritePlace = async (placeId, placeData) => {
  const response = await clientFetch.put(`/points/${placeId}`, placeData)
  return response.data
}

export const removeFavoritePlace = async (placeId) => {
  const response = await clientFetch.delete(`/points/${placeId}`)
  return response.data
}
