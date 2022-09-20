interface GpaApiResponse<Entity> {
  content: Entity
  empty: Boolean
  first: Boolean
  last: boolean
  number: number
  numberOfElements: number
  pageable: {
    offset: number
    pageNumber: number
    pageSize: number
    paged: boolean
    sort: {
      unsorted: boolean
      sorted: boolean
      empty: boolean
    }
    unpaged: boolean
  }
  size: number
  sort: {
    sorted: Boolean
    unsorted: Boolean
    empty: Boolean
  }
  totalElements: number
  totalPages: number
}

export interface ApiResponse<Entity> extends GpaApiResponse<Entity> {}
