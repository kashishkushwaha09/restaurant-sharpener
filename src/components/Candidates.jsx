import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import { ElectionContext } from "../context/ElectionContext";
const Candidates = () => {
    const {candidates,addVote,deleteVote}=useContext(ElectionContext);
  return (
    <div className="text-white px-3 py-1">
      <h3>Candidates</h3>
      {candidates.map((candidate,index)=>(
        <div key={index}>
            <div className="d-flex align-items-end gap-2">
        <h1 className="mb-0">{candidate.name}</h1> <h6 className="mb-1">Total Votes {candidate?.voters?.length ?? 0}</h6>
      </div>
      {/* voters  */}
      <div className="d-flex gap-1 flex-wrap">
        {candidate?.voters && candidate.voters.map((voter,index)=>(
             <div key={index} className="rounded-4 bg-dark bg-gradient p-2 d-flex align-items-center">
          {" "}
          <p className="mb-0">{voter}</p>{" "}
          <button className="btn p-0 m-0" onClick={()=>deleteVote(voter,candidate.id)}>
            <Icon
              icon="material-symbols:delete-outline"
              width="22"
              style={{ color: "red" }}
              className="mb-1"
            />
          </button>
        </div>
        ))}
       
      </div>
        </div>
      ))}
      

      {/* 3rd  */}
    </div>
  );
};

export default Candidates;
