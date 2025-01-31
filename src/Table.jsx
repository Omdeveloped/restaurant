import { useState } from "react";
function Table() {
  const [tables, settables] = useState([
    { id: 1, name: "table 1", limit: "6 member", isBooked: false },
    { id: 2, name: "table 2", limit: "4 member", isBooked: false },
    { id: 3, name: "table 3", limit: "6 member", isBooked: false },
    { id: 4, name: "table 4", limit: "2 member", isBooked: false },
    { id: 5, name: "table 5", limit: "2 member", isBooked: false },
    { id: 6, name: "table 6", limit: "4 member", isBooked: false },
    { id: 7, name: "table 7", limit: "4 member", isBooked: false },
    { id: 8, name: "table 8", limit: "2 member", isBooked: false },
  ]);
  const [selectedTable, setSelectedTable] = useState(null);

  // Function to handle table selection
  const handleSelecttable = (id) => {
    if (!tables.find((table) => table.id === id).isBooked) {
      setSelectedTable(id);
    }
  };

  // Function to handle booking the table
  const handleBookTable = () => {
    if (selectedTable) {
      settables(
        tables.map((table) =>
          table.id === selectedTable ? { ...table, isBooked: true } : table
        )
      );
      setSelectedTable(null); // Reset selected table
    }
  };

  return (
    <div className="App">
      <h1>table Booking</h1>

      {/* Display tables */}
      <div className="table-list">
        {tables.map((table) => (
          <div
            key={table.id}
            className={`table ${
              table.isBooked
                ? "booked"
                : selectedTable === table.id
                ? "selected"
                : ""
            }`}
            onClick={() => handleSelecttable(table.id)}
          >
            {table.name}
            <br></br>
            {table.limit}
          </div>
        ))}
      </div>

      {/* Book Now button */}
      <button
        onClick={handleBookTable}
        disabled={selectedTable === null || tables[selectedTable - 1].isBooked}
      >
        {selectedTable ? "Book Now" : "Select a Table"}
      </button>

      {/* Booking status message */}
      {tables.every((table) => table.isBooked) && (
        <p className="status-message">All tables are booked!</p>
      )}
    </div>
  );
}
export default Table;
