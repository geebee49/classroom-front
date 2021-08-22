import "./styles/classes.css"
import { FaPlus } from "react-icons/fa";

function Classes() {
  return (
    <div className="classrooms">
    <div className="try">
      <div className="class plus">
        <h2>S1</h2>
      </div>
      <div className="class plus">
        <h2>S2</h2>
      </div>
      <div className="class plus">
        <h2>S3</h2>
      </div>
      
      </div>
      
      <div className="try">
      <div className="class plus">
        <h2>S4</h2>
      </div>
      <div className="class plus">
        <h2>S5</h2>
      </div>
      <div className="class plus">
      <div className="add-class">
          <FaPlus color="white" size={30} style={{ cursor: "pointer" }} />
        </div>
      </div>
      </div>

      
    </div>
  );
}

export default Classes;