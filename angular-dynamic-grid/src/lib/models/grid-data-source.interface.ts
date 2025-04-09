import { Observable } from 'rxjs';

/**
 * Interface for providing data to the grid
 * Handles data retrieval, pagination, sorting, and filtering
 * @template T - The type of data items in the grid
 */
export interface IGridDataSource<T = unknown> {
  /**
   * Get the current page of data
   * @returns An Observable that emits the current data array
   */
  getData(): Observable<T[]>;
  
  /**
   * Get the total number of records
   * @returns An Observable that emits the total count
   */
  getTotal(): Observable<number>;
  
  /**
   * Set the current page and page size for pagination
   * @param page - Zero-based page index
   * @param pageSize - Number of items per page
   */
  setPage(page: number, pageSize: number): void;
  
  /**
   * Set the current sort model
   * @param sortModel - Array of sort criteria
   */
  setSortModel(sortModel: IGridSortItem[]): void;
  
  /**
   * Set the current filter model
   * @param filterModel - Array of filter criteria
   */
  setFilterModel(filterModel: IGridFilterItem[]): void;
  
  /**
   * Refresh the current data
   */
  refresh(): void;
}

/**
 * Defines a sort criteria
 */
export interface IGridSortItem {
  /**
   * Field name to sort by
   */
  field: string;
  
  /**
   * Sort direction
   */
  direction: 'asc' | 'desc';
}

/**
 * Defines a filter criteria
 */
export interface IGridFilterItem {
  /**
   * Field name to filter on
   */
  field: string;
  
  /**
   * Type of filter operation
   */
  type: 'equals' | 'contains' | 'startsWith' | 'endsWith' | 'lessThan' | 'greaterThan';
  
  /**
   * Filter value to compare against
   */
  value: unknown;
}