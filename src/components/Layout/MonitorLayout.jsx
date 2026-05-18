import React, { useContext, useState } from "react";
import Modal from "../../modal/Modal";
import AddNewVote from "../AddNewVote";
import { ElectionContext } from "../../context/ElectionContext";

const MonitorLayout = () => {
  const [showModal, setShowModal] = useState(false);
  const { candidates } = useContext(ElectionContext);
  const totalVotes = candidates.reduce(
    (acc, candidate) => acc + (candidate?.voters ?candidate.voters.length :0),
    0,
  );
  return (
    <div className="d-flex p-2 flex-column align-items-center">
      <h1 className="text-white mx-auto">Class Monitor Vote</h1>
      <h6 className="text-white mx-auto">Total Vote {totalVotes}</h6>
      <button className="btn btn-dark" onClick={() => setShowModal(true)}>
        Add New Vote
      </button>
      {showModal && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <AddNewVote onHide={() => setShowModal(false)} />
        </Modal>
      )}
    </div>
  );
};

export default MonitorLayout;
