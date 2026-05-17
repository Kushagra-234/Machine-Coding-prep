import React, { useEffect, useState } from "react";

const pollDataArray = [
  {
    id: 1,
    name: "RoadSide Coder",
    votes: 20,
    checked: false,
  },
  {
    id: 2,
    name: "Akshay Saini",
    votes: 17,
    checked: false,
  },
  {
    id: 3,
    name: "Code with Harry",
    votes: 9,
    checked: false,
  },
];

const Pollwidget = () => {
  const [pollData, setPollData] = useState(pollDataArray);

  let totalVotes = 0;

  for (let i = 0; i < pollData.length; i++) {
    totalVotes += pollData[i].votes;
  }

  useEffect(() => {
    console.log(pollData);
  }, [pollData]);

  const handleChange = (e, id) => {
    const existingArray = [...pollData];

    const currentTrue = existingArray.find(
      (existingItem) => existingItem.checked === true
    );
    console.log(currentTrue);

    // console.log(e.target.checked);
    const newArray = pollData.map((pollItem) => {
      if (pollItem.id === id) {
        return {
          ...pollItem,
          votes: pollItem.votes + 1,
          checked: e.target.checked,
        };
      } else if (currentTrue && pollItem.id === currentTrue.id) {
        return { ...pollItem, votes: pollItem.votes - 1, checked: false };
      }
      return { ...pollItem, checked: false };
    });

    setPollData(newArray);
  };

  const handleRemove = () => {
    const existingArray = [...pollData];

    const currentTrue = existingArray.find(
      (existingItem) => existingItem.checked === true
    );

    const updatedArray = pollData.map((pollItem) => {
      if (pollItem.id === currentTrue.id) {
        return { ...pollItem, votes: pollItem.votes - 1, checked: false };
      } else return { ...pollItem, checked: false };
    });

    setPollData(updatedArray);
  };

  return (
    <div className="flex flex-col w-full h-full gap-10 justify-center items-center">
      <h3>Poll widget</h3>
      <div className="flex gap-5 flex-col">
        {pollData.map((pollItem) => {
          return (
            <div className="flex gap-5">
              <input
                checked={pollItem.checked}
                onChange={(e) => handleChange(e, pollItem.id)}
                type="radio"
              />
              <div className="flex gap-5">
                <label>{pollItem.name}</label>
                <div>{pollItem.votes}</div>
                <div>
                  Percentage:{((pollItem.votes / totalVotes) * 100).toFixed(2)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>Total Votes:{totalVotes}</div>
      <button onClick={handleRemove} className="border px-2 border-black">
        Remove vote
      </button>
    </div>
  );
};

export default Pollwidget;
