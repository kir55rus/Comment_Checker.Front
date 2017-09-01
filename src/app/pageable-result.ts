export class PageableResult<T> {
  result: T;
  totalCount: number;
  totalPages: number;
  pageSize: number;
  currentPage: number;

  constructor() {}
}
