import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MonsterContext } from "../components/MonsterContext/MonsterContext";
import { MonsterCard } from "../components/MonsterCard/MonsterCard";

export const MonsterPage = () => {
  // const { id } = useParams<{ id: string }>();
  // const parsedId = id ? parseInt(id, 10) : undefined;
  const { Id } = useParams<{ Id: string }>();

  const { currentMonster } = useContext(MonsterContext);
  const monster = currentMonster?.find((m) => m.Id === Id);
  // console.log(currentMonster);

  // console.log(name);
  // console.log(monster);

  return <>{monster ? <MonsterCard chosenMonster={monster} /> : ""}</>;
};
