# Angular Dynamic Grid

A high-performance, secure, and dynamic grid library for Angular applications designed to handle large datasets efficiently while providing extensive customization options and robust security features.

## Features

### Core Functionality
- Responsive grid component with virtual scrolling for 100,000+ rows
- Dynamic column definitions with resizing/reordering capabilities
- Efficient data binding with optimized change detection
- Support for pagination, sorting, and filtering (both client and server-side)
- Row virtualization and DOM recycling for optimal performance
- Hierarchical row grouping with expand/collapse functionality

### Advanced Features
- Row and cell selection with keyboard navigation support
- Custom cell editors and validators
- Data export functionality (CSV, Excel)
- State management with persistence options
- Theming and styling customization
- Advanced row grouping with aggregation functions

### Security Considerations
- Content sanitization for user-generated content
- Input validation and output encoding
- Protection against XSS vulnerabilities
- Secure handling of dynamic HTML content

### Performance Targets
- Render time under 50ms for visible viewport
- Minimal memory footprint with large datasets
- Optimized Angular change detection cycles

## Installation

```bash
npm install @ngrid-x/core --save
```

## Basic Usage

```typescript
import { Component } from '@angular/core';
import { GridModule } from '@ngrid-x/core';

@Component({
  selector: 'app-root',
  template: `
    <ngrid-x-grid
      [columns]="columns"
      [dataSource]="dataSource"
      [options]="gridOptions">
    </ngrid-x-grid>
  `
})
export class AppComponent {
  columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 }
  ];
  
  dataSource = // your data source implementation
  
  gridOptions = {
    enableSorting: true,
    enableFilter: true,
    enableVirtualization: true,
    rowHeight: 40
  };
}
```

## Documentation

Detailed documentation is available at [documentation link].

## Examples

Check out the examples in our demo application:
- Basic grid setup
- Custom cell rendering
- Server-side operations
- Virtual scrolling with large datasets
- Row grouping and aggregation
- State persistence

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Development Roadmap

- [x] Core interfaces and models
- [ ] Basic grid component
- [ ] Virtual scrolling implementation
- [ ] Selection capabilities
- [ ] Filtering and sorting
- [ ] Cell editing
- [ ] Export functionality
- [ ] Advanced grouping