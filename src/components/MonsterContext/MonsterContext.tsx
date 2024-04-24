import { createContext } from "react";
import { MonsterContextType } from "../../monsterTypes";

export const MonsterContext = createContext<MonsterContextType>({
  currentMonster: [],
  dispatch: () => {},
});
