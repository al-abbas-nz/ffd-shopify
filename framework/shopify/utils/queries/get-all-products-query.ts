export const productConnectionFragment = /* GraphQL */ `
  fragment productConnection on ProductConnection {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    edges {
      node {
        id
        title
        tags
        vendor
        handle
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 1) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              originalSrc
              altText
              width
              height
            }
          }
        }
      }
    }
  }
`
const getAllProductsQuery = /* GraphQL */ `
  query getAllProducts(
    $first: Int = 100
    # $query: String = ""
    $sortKey: ProductSortKeys = ID
    $reverse: Boolean = true
  ) {
    products(
      first: $first
      sortKey: $sortKey
      reverse: $reverse
      query: "tag:Artists/Fat Freddy's Drop"
    ) {
      ...productConnection
    }
  }

  ${productConnectionFragment}
`

export default getAllProductsQuery
