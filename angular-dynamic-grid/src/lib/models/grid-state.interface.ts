import { IGridSortItem, IGridFilterItem } from './grid-data-source.interface';

/**
 * Interface for saving and restoring grid state
 * Used for persistence of user preferences and grid configuration
 */
export interface IGridState {
  /**
   * State of individual columns
   */
  columns: {
    [field: string]: {
      /**
       * Current width of the column
       */
      width?: number;
      
      /**
       * Whether the column is visible
       */
      visible?: boolean;
      
      /**
       * Display order of the column
       */
      order?: number;
    }
  };
  
  /**
   * Current sort criteria
   */
  sort?: IGridSortItem[];
  
  /**
   * Current filter criteria
   */
  filter?: IGridFilterItem[];
  
  /**
   * Current pagination state
   */
  pagination?: {
    /**
     * Current page (zero-based)
     */
    page: number;
    
    /**
     * Current page size
     */
    pageSize: number;
  };
  
  /**
   * Current grouping state
   */
  grouping?: {
    /**
     * Fields used for grouping
     */
    fields: string[];
    
    /**
     * Map of group keys to expansion state
     */
    expanded: {[groupKey: string]: boolean};
  };
}