export type Product = {
  id: string
  title: string
  permalink: string
  currency: string
  category_id: string
  price: number
  thumbnail: string
}


export type Category = {
  id: string
  name: string
 parent_id?: string
}