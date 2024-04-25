import "./MonsterCard.scss";
import { Button } from "../Button/Button";
import { useContext } from "react";
import { MonsterContext } from "../MonsterContext/MonsterContext";
import { MonsterType } from "../../monsterTypes";
import { useNavigate } from "react-router-dom";

type MonsterProp = {
  chosenMonster: MonsterType;
};

export const MonsterCard = ({ chosenMonster }: MonsterProp) => {
  const { dispatch } = useContext(MonsterContext);
  console.log(chosenMonster);
  const navigate = useNavigate();

  const removeCard = (firstName: string) => {
    dispatch({ type: "REMOVE_MONSTER", payload: firstName });
    navigate("/");
  };

  return (
    <>
      <div className="MonsterCard">
        All info här:
        <h1>{chosenMonster.First_name}</h1>
        <p>{chosenMonster.Last_name}</p>
        <p>{chosenMonster.Class}</p>
        <p>{chosenMonster.Description}</p>
        <p>{chosenMonster.Program}</p>
        <Button
          buttonName="Delete"
          handleClick={() => removeCard(chosenMonster.First_name)}
        />
      </div>
    </>
  );
};
