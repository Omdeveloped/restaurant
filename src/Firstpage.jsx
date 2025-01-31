import Secondpage from "./Secondpage";
import Rooms from "./Rooms.jsx";
import Table from "./Table.jsx";
function Firstpage() {
  const secondPageNames = ["ROOMS", "TABLE BOOKING", "MESH"];

  return (
    <>
      <nav>
        <span>Home</span>
        <span>Room</span>
        <span>Table</span>
        <span>Mesh</span>
        <span>Contact</span>
      </nav>
      {secondPageNames.map((name) => (
        <Secondpage key={name} name={name} />
      ))}
      <Rooms />
      <Table />
    </>
  );
}
export default Firstpage;
