import { useContext, useState } from "react";
import { Button } from "../Button/Button";
import { MonsterContext } from "../MonsterContext/MonsterContext";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export const DropDown = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { currentMonster } = useContext(MonsterContext);

  const updatedMonster = currentMonster.map((m) => ({
    ...m,
    Id: uuidv4,
  }));

  const monsterSelect = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Button buttonName="Select Monster" handleClick={monsterSelect} />
      {isExpanded && (
        <div className="DropDownMenu">
          <ul>
            {updatedMonster.map((m) => (
              <li key={m.First_name}>
                <Link to={`/monster/${m.Id}`}>{m.First_name} </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
