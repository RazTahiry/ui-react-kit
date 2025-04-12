import React from "react";

export const Table = ({ columns, data, className }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow">
      <table
        className={`min-w-full bg-white divide-y divide-gray-200 ${className}`}
      >
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col, i) => (
              <th
                key={i}
                className={`px-4 py-3 text-sm font-medium text-gray-600 text-${
                  col.align || "left"
                }`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50 transition duration-300">
              {columns.map((col, i) => (
                <td
                  key={i}
                  className={`px-4 py-3 text-sm text-gray-800 text-${
                    col.align || "left"
                  }`}
                >
                  {col.render ? col.render(row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
