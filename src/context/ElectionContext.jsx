import { createContext, useEffect, useState } from "react";
import { DUMMY_USERS } from "../data/dummy-candidates";
import axios from "axios";
export const ElectionContext = createContext({
  totalVotes: 0,
  addVote: (form) => {},
  getVote: () => {},
  deleteVote: (name, id) => {},
});

export const ElectionProvider = ({ children }) => {
  const [candidates, setCandidates] = useState(DUMMY_USERS);
  const [totalVotes, setTotalVotes] = useState(0);
  const BASE_URL = "https://election-34bcf-default-rtdb.firebaseio.com";
  const addVote = async (formData) => {
    //    console.log(name)
    const existingCandidate = candidates.find(
      (candidate) => candidate.id == formData.candidate.id,
    );
    let updatedCandidate;
    if (existingCandidate) {
      updatedCandidate = {
        ...existingCandidate,
        voters: [...existingCandidate.voters, formData.voterName],
      };
    } else {
      updatedCandidate = {
        id: formData.candidate.id,
        name: formData.candidate.name,
        voters: [formData.voterName],
      };
    }

    const response = await axios.patch(
      `${BASE_URL}/candidates/${updatedCandidate.id}.json`,
      updatedCandidate,
    );
    if (response.status == 200) {
      setCandidates((prev) => {
        const candidateExists = prev.some(
          (candidate) => candidate.id == updatedCandidate.id,
        );
        if (candidateExists) {
          return prev.map((candidate) =>
            candidate.id == updatedCandidate.id ? updatedCandidate : candidate,
          );
        }
        return [...prev, updatedCandidate];
      });
    }
    console.log(response);
  };
  const fetchCandidates = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/candidates/.json`);
      if (response.status == 200 && response?.data.length > 0) {
        const candidates = response?.data
          .filter(Boolean)
          .map((candidate) => ({
            ...candidate,
            voters: candidate.voters || [],
          }));
        setCandidates(candidates);
      }
      console.log("response ", response);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteVote = async (voterName, id) => {
    try {
      const existingCandidate = candidates.find(
        (candidate) => candidate.id == id,
      );
      let updatedCandidate;
      if (existingCandidate) {
        let filteredVoters = existingCandidate.voters.filter(
          (voter) => voter != voterName,
        );
        console.log("filteredVoters", filteredVoters);
        updatedCandidate = {
          ...existingCandidate,
          voters: [...filteredVoters],
        };
      }

      const response = await axios.patch(
        `${BASE_URL}/candidates/${id}.json`,
        updatedCandidate,
      );
      if (response.status == 200) {
        setCandidates((prev) =>
          prev.map((candidate) =>
            candidate.id == id ? updatedCandidate : candidate,
          ),
        );
      }
      console.log("delete response ", response);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("fetchCandidates ", candidates);
  useEffect(() => {
    fetchCandidates();
  }, []);

  return (
    <ElectionContext.Provider
      value={{ candidates, totalVotes, addVote, deleteVote }}
    >
      {children}
    </ElectionContext.Provider>
  );
};
