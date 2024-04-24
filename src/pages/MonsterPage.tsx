import { useContext } from "react";
import { useParams } from "react-router-dom";
import { MonsterContext } from "../components/MonsterContext/MonsterContext";
import { MonsterCard } from "../components/MonsterCard/MonsterCard";

export const MonsterPage = () => {
  const { id } = useParams<{ id: string }>();
  const parsedId = id ? parseInt(id, 10) : undefined;

  const { currentMonster } = useContext(MonsterContext);
  const monster = parsedId
    ? currentMonster?.find((m) => m.Id === parsedId)
    : undefined;

  return <>{monster ? <MonsterCard chosenMonster={monster} /> : ""}</>;
};
