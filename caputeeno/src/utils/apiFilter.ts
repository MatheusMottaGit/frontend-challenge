import { Categories, Types } from "@/types/filter"

export function getTypes(type: Types) {
  if (type === Types.MUGS) return 'mugs'
  if (type === Types.TSHIRTS) return 't-shirts'

  return ''
}

export function getCategories(category: Categories) {
  if (category === Categories.NEWEST) return { field: "created_at", order: "ASC" }
  if (category === Categories.HIGHER) return { field: "price_in-cents", order: "ASC" }
  if (category === Categories.LOWER) return { field: "price_in_cents", order: "ASC" }
  if (category === Categories.MOST) return { field: "sales", order: "DESC" }
}

export function queriesAmount(type: Types) {

  if (type === Types.ALL) return `query {
      allProducts{
        id
        name
        price_in_cents
        image_url
      }
  }`

  const selectedType = getTypes(type)

  return `query {
      allProducts(filter: {category: "${selectedType}"}){
        id
        name
        price_in_cents
        image_url
        category
      }
  }`


}