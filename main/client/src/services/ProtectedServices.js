import Client from './api'

export const GetMenuByRestaurantId = async (restaurant_id) => {
  try {
    const res = await Client.get(`/api/menu_items/menu/${restaurant_id}`)
    return res.data
  } catch (error) {
    throw error
  }
}