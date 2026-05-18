import React, { useContext, useState } from "react";
import { DUMMY_USERS } from "../data/dummy-candidates";
import { ElectionContext } from "../context/ElectionContext";
const AddNewVote = ({ onHide }) => {
  const candidates = DUMMY_USERS;
  const [formData, setFormData] = useState({
    voterName: "",
    candidate: null,
    
  });
   const {addVote}=useContext(ElectionContext);
  const handleSelectCandidate = (e) => {
    const id = e.target.value;
    const user = candidates.find((item) => item.id == id);
    console.log(user);
    setFormData((prev) => ({
      ...prev,
      candidate: user,
    }));
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
   addVote(formData);
   
  }
  
  return (
    <div>
      <h4 className="mb-0">Add New Vote</h4>
      <form className="mt-2" onSubmit={handleSubmit}>
        <div className="d-flex gap-2">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Student Name
            </label>
            <input
              type="text"
              value={formData.voterName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, voterName: e.target.value }))
              }
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-3" style={{ minWidth: "210px" }}>
            <label htmlFor="exampleFormControlInput2" className="form-label">
              Select Candidate
            </label>
            <select
              id="exampleFormControlInput2"
              className="form-control"
              value={formData.candidateId}
              onChange={handleSelectCandidate}
            >
              <option value="-1">Select Candidate</option>
              <option value="1">Suresh</option>
              <option value="2">Deepak</option>
              <option value="3">Abhik</option>
            </select>
          </div>
        </div>
        <div className="d-flex gap-2 justify-content-end">
          <button type="button" className="btn btn-secondary" onClick={onHide}>
            close
          </button>
          <button type="submit" className="btn btn-warning">
            Vote
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewVote;
