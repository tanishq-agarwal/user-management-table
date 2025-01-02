const StyledTable = ({ table }) => {
  return (
    <table className="table-auto border-collapse border border-gray-200 w-full">
      <thead className="bg-gray-100">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="border-b border-gray-200">
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="px-4 py-2 text-left text-gray-600 font-medium"
              >
                {/* Display column header */}
                {typeof header.column.columnDef.header === "function"
                  ? header.column.columnDef.header()
                  : header.column.columnDef.header}

                {/* Filtering Logic */}
                <div className="mt-1">
                  <input
                    type="text"
                    value={header.column.getFilterValue() || ""}
                    onChange={(e) =>
                      header.column.setFilterValue(e.target.value)
                    }
                    placeholder={`Filter by ${header.column.id}`}
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded-lg"
                  />
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="hover:bg-gray-50">
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="px-4 py-2 border-b border-gray-200">
                {typeof cell.column.columnDef.cell === "function"
                  ? cell.column.columnDef.cell(cell.getContext())
                  : cell.getValue()}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StyledTable;