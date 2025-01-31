import { useState } from "react";

function App() {
  const [rooms, setRooms] = useState([
    { id: 1, name: "Room 1", isBooked: false },
    { id: 2, name: "Room 2", isBooked: false },
    { id: 3, name: "Room 3", isBooked: false },
    { id: 4, name: "Room 4", isBooked: false },
    { id: 5, name: "Room 5", isBooked: false },
    { id: 6, name: "Room 6", isBooked: false },
    { id: 7, name: "Room 7", isBooked: false },
    { id: 8, name: "Room 8", isBooked: false },
    { id: 9, name: "Room 9", isBooked: false },
    { id: 10, name: "Room 10", isBooked: false },
  ]);
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Function to handle room selection
  const handleSelectRoom = (id) => {
    if (!rooms.find((room) => room.id === id).isBooked) {
      setSelectedRoom(id);
    }
  };

  // Function to handle booking the room
  const handleBookRoom = () => {
    if (selectedRoom) {
      setRooms(
        rooms.map((room) =>
          room.id === selectedRoom ? { ...room, isBooked: true } : room
        )
      );
      setSelectedRoom(null); // Reset selected room
    }
  };

  return (
    <div className="App">
      <h1>Room Booking</h1>

      {/* Display rooms */}
      <div className="room-list">
        {rooms.map((room) => (
          <div
            key={room.id}
            className={`room ${
              room.isBooked
                ? "booked"
                : selectedRoom === room.id
                ? "selected"
                : ""
            }`}
            onClick={() => handleSelectRoom(room.id)}
          >
            {room.name}
          </div>
        ))}
      </div>

      {/* Book Now button */}
      <button
        onClick={handleBookRoom}
        disabled={selectedRoom === null || rooms[selectedRoom - 1].isBooked}
      >
        {selectedRoom ? "Book Now" : "Select a Room"}
      </button>

      {/* Booking status message */}
      {rooms.every((room) => room.isBooked) && (
        <p className="status-message">All rooms are booked!</p>
      )}
    </div>
  );
}

export default App;
