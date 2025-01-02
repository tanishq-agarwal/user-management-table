import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useUsers } from "../../hooks/useUsers";
import { useRouter } from "next/router";
import { useState } from "react";
import { columns } from "./constants"; // Ensure your columns array has sorting and filtering settings
import StyledTable from "./StylingTable";

const UserTable = () => {
  const router = useRouter();
  const page = parseInt(router.query.page || 1, 10);
  const { data: users, isLoading, error } = useUsers(page);

  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data: users || [],
    columns,
    state: { globalFilter, sorting, columnFilters },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users.</p>;

  return (
    <div className="max-w-6xl mx-auto my-6 p-4">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">
        User Management Table
      </h1>

      {/* Search Input */}
      <div className="mb-6">
        <input
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search all columns..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <StyledTable table={table} />
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={() => router.push(`/users?page=${page - 1}`)}
          disabled={page === 1}
          className={`px-4 py-2 text-sm font-medium border rounded-lg ${
            page === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Previous
        </button>
        <span className="text-gray-600">
          Page <strong>{page}</strong>
        </span>
        <button
          onClick={() => router.push(`/users?page=${page + 1}`)}
          className="px-4 py-2 text-sm font-medium bg-blue-500 text-white border rounded-lg hover:bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserTable;
