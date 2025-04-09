import { IGridColumn } from "./grid-column.interface";

/**
 * Defines configuration options for the grid component
 * @template T - The type of data items in the grid
 */
export interface IGridOptions<T = unknown> {
  /**
   * Array of column definitions for the grid
   */
  columns: IGridColumn<T>[];
  
  /**
   * Height of each row in pixels
   * @default 30
   */
  rowHeight?: number;
  
  /**
   * Height of the header row in pixels
   * @default 40
   */
  headerHeight?: number;
  
  // Features
  /**
   * Whether to enable column sorting
   * @default true
   */
  enableSorting?: boolean;
  
  /**
   * Whether to enable column filtering
   * @default true
   */
  enableFilter?: boolean;
  
  /**
   * Whether columns can be resized by the user
   * @default true
   */
  enableColumnResize?: boolean;
  
  /**
   * Whether columns can be reordered by drag and drop
   * @default true
   */
  enableColumnMove?: boolean;
  
  /**
   * Whether rows can be selected
   * @default true
   */
  enableRowSelection?: boolean;
  
  /**
   * Whether individual cells can be selected
   * @default false
   */
  enableCellSelection?: boolean;
  
  /**
   * Whether to use virtual scrolling for large datasets
   * @default true
   */
  enableVirtualization?: boolean;
  
  // Pagination
  /**
   * Whether to enable pagination
   * @default false
   */
  pagination?: boolean;
  
  /**
   * Number of rows per page when pagination is enabled
   * @default 100
   */
  paginationPageSize?: number;
  
  // Callbacks
  /**
   * Callback fired when a row is clicked
   * @param event - The mouse event
   * @param rowData - The data for the clicked row
   */
  onRowClick?: (event: MouseEvent, rowData: T) => void;
  
  /**
   * Callback fired when a cell is clicked
   * @param event - The mouse event
   * @param rowData - The data for the clicked row
   * @param column - The column definition
   */
  onCellClick?: (event: MouseEvent, rowData: T, column: IGridColumn<T>) => void;
  
  /**
   * Callback fired when a column is resized
   * @param column - The column definition
   * @param newWidth - The new width in pixels
   */
  onColumnResize?: (column: IGridColumn<T>, newWidth: number) => void;
  
  // Security
  /**
   * Whether to sanitize all HTML content in the grid to prevent XSS attacks
   * @default true
   */
  sanitizeData?: boolean;
  
  // Performance
  /**
   * Number of rows to render outside the visible viewport (for smoother scrolling)
   * @default 10
   */
  rowBuffer?: number;
  
  /**
   * Maximum number of row blocks to keep rendered (for memory optimization)
   * @default 10
   */
  maxBlocksInCache?: number;
  
  // Appearance
  /**
   * Theme name to apply to the grid
   */
  theme?: string;
  
  /**
   * CSS class(es) to apply to rows
   * Can be a string, array of strings, or a function that returns classes based on the row data
   */
  rowClass?: string | string[] | ((data: T) => string | string[]);
}