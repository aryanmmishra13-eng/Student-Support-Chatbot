import { FaPlus, FaHome, FaUniversity, FaMoneyBill, FaHotel, FaBriefcase, FaCog } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">🎓 Student AI</h2>

      <button className="new-chat">
        <FaPlus /> New Chat
      </button>

      <ul>
        <li><FaHome /> Home</li>
        <li><FaUniversity /> Admission</li>
        <li><FaMoneyBill /> Fees</li>
        <li><FaHotel /> Hostel</li>
        <li><FaBriefcase /> Placement</li>
        <li><FaCog /> Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;