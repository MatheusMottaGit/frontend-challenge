import { Categories, Types } from "@/types/filter"

export function getTypes(type: Types) {
  if (type === Types.MUGS) return 'mugs'
  if (type === Types.TSHIRTS) return 't-shirts'

  return ''
}

export function getCategories(category: Categories) {
  if (category === Categories.NEWEST) return { field: "created_at", order: "ASC" }
  if (category === Categories.HIGHER) return { field: "price_in_cents", order: "DSC" }
  if (category === Categories.LOWER) return { field: "price_in_cents", order: "ASC" }
  if (category === Categories.MOST) return { field: "sales", order: "DSC" }
}

export function queriesAmount(type: Types, category: Categories) {

  if (type === Types.ALL && category === Categories.MOST) return `query {
      allProducts(sortField: "sales", sortOrder: "DSC"){
        id
        name
        price_in_cents
        image_url
      }
  }`

  const selectedCategory = getCategories(category)
  const selectedType = getTypes(type)

  return `query {
      allProducts(${selectedType ? `filter: {category: "${selectedType}"}` : ''}, sortField: "${selectedCategory?.field}", sortOrder: "${selectedCategory?.order}"){
        id
        name
        price_in_cents
        image_url
        category
        sales
      }
  }`
}