/**
 * Defines the structure and behavior of a grid column
 * @template T - The type of data items in the grid
 */
export interface IGridColumn<T = unknown> {
  /**
   * Field name in the data object this column is bound to
   * Must be a valid key of the data type T
   */
  field: keyof T & string;
  
  /**
   * Display name for the column header
   */
  headerName: string;
  
  // Display options
  /**
   * Width of the column in pixels
   */
  width?: number;
  
  /**
   * Minimum width of the column in pixels
   */
  minWidth?: number;
  
  /**
   * Maximum width of the column in pixels
   */
  maxWidth?: number;
  
  /**
   * Whether the column can be resized by the user
   */
  resizable?: boolean;
  
  /**
   * Whether the column can be sorted
   */
  sortable?: boolean;
  
  /**
   * Whether the column can be filtered
   */
  filterable?: boolean;
  
  /**
   * Pin the column to the left or right side of the grid
   */
  pinned?: 'left' | 'right' | null;
  
  // Styling
  /**
   * CSS class(es) to apply to the header cell
   */
  headerClass?: string | string[];
  
  /**
   * CSS class(es) to apply to body cells in this column
   * Can be a string, array of strings, or a function that returns classes based on the row data
   */
  cellClass?: string | string[] | ((data: T) => string | string[]);
  
  // Rendering
  /**
   * Custom renderer function for cell content
   * @param value - The cell value
   * @param rowData - The entire row data object
   * @param column - The column definition
   * @returns Rendered content as string or HTMLElement
   */
  cellRenderer?: (value: T[keyof T], rowData: T, column: IGridColumn<T>) => string | HTMLElement;
  
  /**
   * Custom renderer function for header content
   * @param column - The column definition
   * @returns Rendered content as string or HTMLElement
   */
  headerRenderer?: (column: IGridColumn<T>) => string | HTMLElement;
  
  // Editing
  /**
   * Whether cells in this column can be edited
   */
  editable?: boolean;
  
  /**
   * Component to use for editing cell values
   * Will be refined later with proper component types
   */
  cellEditor?: unknown;
  
  /**
   * Validation function for edited cell values
   * @param value - The new cell value
   * @param rowData - The entire row data object
   * @returns Whether the value is valid
   */
  cellValidator?: (value: T[keyof T], rowData: T) => boolean;
  
  // Formatting
  /**
   * Function to format the cell value for display
   * @param value - The raw cell value
   * @param rowData - The entire row data object
   * @returns The formatted value
   */
  valueFormatter?: (value: T[keyof T], rowData: T) => unknown;
  
  /**
   * Function to parse user input when editing
   * @param value - The user input value
   * @returns The parsed value
   */
  valueParser?: (value: unknown) => T[keyof T];
  
  // Security
  /**
   * Whether to sanitize HTML content in this column to prevent XSS attacks
   */
  sanitize?: boolean;
}