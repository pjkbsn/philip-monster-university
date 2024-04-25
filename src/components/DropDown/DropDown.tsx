import { useContext, useState } from "react";
import { Button } from "../Button/Button";
import { MonsterContext } from "../MonsterContext/MonsterContext";
import { Link } from "react-router-dom";

export const DropDown = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { currentMonster } = useContext(MonsterContext);

  console.log(currentMonster);

  const monsterSelect = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Button buttonName="Select Monster" handleClick={monsterSelect} />
      {isExpanded && (
        <div className="DropDownMenu">
          <ul>
            {currentMonster.map((m) => (
              <li key={m.Id}>
                <Link to={`/monster/${m.Id}`}>{m.First_name} </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
