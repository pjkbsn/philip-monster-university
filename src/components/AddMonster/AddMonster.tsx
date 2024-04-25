import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import "./AddMonster.scss";
import { useContext, useState } from "react";
import { MonsterContext } from "../MonsterContext/MonsterContext";
import { v4 as uuidv4 } from "uuid";

export const AddMonster = () => {
  const { dispatch } = useContext(MonsterContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [monsterClass, setMonsterClass] = useState("");
  const [program, setProgram] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const addMonster = () => {
    dispatch({
      type: "ADD_MONSTER",
      payload: {
        Id: uuidv4(),
        First_name: firstName,
        Last_name: lastName,
        Class: monsterClass,
        Program: program,
        Description: description,
      },
    });
    navigate("/");
  };

  const homepage = () => {
    navigate("/");
  };

  return (
    <div className="AddMonster">
      <form action="">
        <div>
          <label>Name</label>
          <input
            placeholder="First"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            placeholder="Last"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Class</label>
          <input
            placeholder="Class"
            type="text"
            value={monsterClass}
            onChange={(e) => setMonsterClass(e.target.value)}
          />
        </div>
        <div>
          <label>Program</label>
          <input
            placeholder="Program"
            type="text"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            placeholder="Description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </form>
      <div className="buttonContainer">
        <Button buttonName="Homepage" handleClick={homepage} />
        <Button buttonName="Add monster" handleClick={addMonster} />
      </div>
    </div>
  );
};

// Detta ska monstret innehålla
//-------------------------------
//   Id: number;
//   First_name: string;
//   Last_name: string;
//   Class: string;
//   Program: string;
//   Description: string;
//-------------------------------
