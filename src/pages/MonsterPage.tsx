import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MonsterContext } from "../components/MonsterContext/MonsterContext";
import { MonsterCard } from "../components/MonsterCard/MonsterCard";

export const MonsterPage = () => {
  const { Id } = useParams<{ Id: string }>();

  const { currentMonster } = useContext(MonsterContext);
  const monster = currentMonster?.find((m) => m.Id === Id);

  return <>{monster ? <MonsterCard chosenMonster={monster} /> : ""}</>;
};
