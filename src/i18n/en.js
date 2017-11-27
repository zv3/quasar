export default {
  date: {
    days: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    month: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_')
  },
  label: {
    clear: 'Clear',
    ok: 'OK',
    cancel: 'Cancel',
    set: 'Set',
    select: 'Select',
    remove: 'Remove',
    update: 'Update',
    create: 'Create',
    search: 'Search', // QSearch
    filter: 'Filter' // QSelect
  },
  pullToRefresh: {
    pull: 'Pull down to refresh',
    release: 'Release to refresh',
    refresh: 'Refreshing...'
  },
  storageUnits: {
    b: 'B',
    kb: 'kB',
    mb: 'MB',
    bg: 'GB',
    tb: 'TB',
    pb: 'PB'
  },
  dataTable: {
    noData: 'No data available',
    noResults: 'No matching records found',
    loader: 'Loading...',
    selectedRows: rows => `${rows} selected row(s).`,
    rowsPerPage: 'Rows per page:',
    allRows: 'All',
    pagination: (start, end, total) => `${start}-${end} of ${total}`,
    columns: 'Columns' // QTableColumns
  },
  editor: {
    link: 'Link',
    url: 'URL',
    bold: 'Bold',
    italic: 'Italic',
    strikethrough: 'Strikethrough',
    underline: 'Underline',
    unorderedList: 'Unordered List',
    orderedList: 'Ordered List',
    subscript: 'Subscript',
    superscript: 'Superscript',
    hyperlink: 'Hyperlink',
    toggleFullscreen: 'Toggle Fullscreen',
    quote: 'Quote',
    left: 'Left align',
    center: 'Center align',
    right: 'Right align',
    justify: 'Justify align',
    print: 'Print',
    outdent: 'Decrease indentation',
    indent: 'Increase indentation',
    removeFormat: 'Remove formatting',
    hr: 'Insert Horizontal Rule',
    undo: 'Undo',
    redo: 'Redo',
    header1: 'Header 1',
    header2: 'Header 2',
    header3: 'Header 3',
    header4: 'Header 4',
    header5: 'Header 5',
    header6: 'Header 6',
    paragraph: 'Paragraph',
    code: 'Code',
    size1: 'Very small',
    size2: 'A bit small',
    size3: 'Normal',
    size4: 'Medium-large',
    size5: 'Big',
    size6: 'Very big',
    size7: 'Maximum',
    defaultFont: 'Default Font'
  }
}
