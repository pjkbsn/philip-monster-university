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

  const removeCard = (Id: string) => {
    dispatch({ type: "REMOVE_MONSTER", payload: Id });
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
          handleClick={() => removeCard(chosenMonster.Id)}
        />
      </div>
    </>
  );
};
