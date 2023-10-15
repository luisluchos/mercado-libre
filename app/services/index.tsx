import { type Product } from '../types'

export const getProducts = async () => {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLA/search?seller_id=${process.env.SELLER_ID}`
  )
  const data = (await response.json()) as Promise<{ results: Product[] }>
  return data
}
